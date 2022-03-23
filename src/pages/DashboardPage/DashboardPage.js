import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Context } from '../../App';
import { UserContext } from '../../providers/UserProvider';
// import { Scrollbars } from 'react-custom-scrollbars';
import {Header, Row, DashboardPanel, Column, InvertedButton, WideColumn, DashboardCard, MiniChart, Button, TeamMember, CurrencyTable, Link} from '../../components';
import PropTypes from 'prop-types';
import lightModeStyles from './DashboardPage.module.scss';
import darkModeStyles from './DashboardPageDark.module.scss';
import {HeadshotPng} from '../../img';
import colors from '../../utilities/_export.module.scss';
import dayjs from 'dayjs';


const DashboardPage = () => {
	const {state} = useContext(Context);
	let styles = state.darkMode ? darkModeStyles : lightModeStyles;
	// const initialBacktests = [
	//     {
	//         "id": 0,
	//         "name": "Project #0",
	//         "active": false,
	//         "pnl": -193.78739768240672,
	//         "position": 2.087464427309367,
	//         "currency": "BNB",
	//         "period": 24
	//     },
	//     {
	//         "id": 1,
	//         "name": "Project #1",
	//         "active": false,
	//         "pnl": -203.14029014725676,
	//         "position": 2.102340856933121,
	//         "currency": "ADA",
	//         "period": 22
	//     },
	//     {
	//         "id": 2,
	//         "name": "Project #2",
	//         "active": true,
	//         "pnl": -227.40048317111183,
	//         "position": 1.0332454583303086,
	//         "currency": "USDT",
	//         "period": 12
	//     },
	//     {
	//         "id": 3,
	//         "name": "Project #3",
	//         "active": false,
	//         "pnl": 93.15430104311883,
	//         "position": 0.8069360321553631,
	//         "currency": "BNB",
	//         "period": 22
	//     },
	//     {
	//         "id": 4,
	//         "name": "Project #4",
	//         "active": false,
	//         "pnl": 179.33849730760255,
	//         "position": 0.711914926374394,
	//         "currency": "ADA",
	//         "period": 6
	//     },
	//     {
	//         "id": 5,
	//         "name": "Project #5",
	//         "active": false,
	//         "pnl": -106.21883729536685,
	//         "position": 2.1523815455733675,
	//         "currency": "ADA",
	//         "period": 3
	//     },
	//     {
	//         "id": 6,
	//         "name": "Project #6",
	//         "active": true,
	//         "pnl": -65.57468448621927,
	//         "position": 1.4262508606556423,
	//         "currency": "ADA",
	//         "period": 12
	//     },
	//     {
	//         "id": 7,
	//         "name": "Project #7",
	//         "active": false,
	//         "pnl": 37.9264272588772,
	//         "position": 0.9336841129534784,
	//         "currency": "USDT",
	//         "period": 9
	//     },
	//     {
	//         "id": 8,
	//         "name": "Project #8",
	//         "active": false,
	//         "pnl": 214.83304478516573,
	//         "position": 2.034428965364627,
	//         "currency": "ADA",
	//         "period": 16
	//     },
	//     {
	//         "id": 9,
	//         "name": "Project #9",
	//         "active": true,
	//         "pnl": 182.68949519625022,
	//         "position": 2.3180706342119373,
	//         "currency": "ADA",
	//         "period": 22
	//     }
	// ];
	// const initialProjects = [
	//     {
	//         "id": 0,
	//         "name": "Project #0",
	//         "active": true,
	//         "last_modified": 1645672934,
	//         "currency": "USDT",
	//     },
	//     {
	//         "id": 1,
	//         "name": "Project #1",
	//         "active": true,
	//         "last_modified": 1644873734,
	//         "currency": "BNB",
	//     },
	//     {
	//         "id": 2,
	//         "name": "Project #2",
	//         "active": false,
	//         "last_modified": 1644978134,
	//         "currency": "BNB",
	//     },
	//     {
	//         "id": 3,
	//         "name": "Project #3",
	//         "active": true,
	//         "last_modified": 1645122134,
	//         "currency": "ADA",
	//     },
	//     {
	//         "id": 4,
	//         "name": "Project #4",
	//         "active": true,
	//         "last_modified": 1644952934,
	//         "currency": "BTC",
	//     }
	// ];

	const users = [
		{
			id: 0,
			name: 'John Doe',
			active: true,
		},
		{
			id: 1,
			name: 'Jane Doe',
			active: false,
		},
		{
			id: 2,
			name: 'John Smith',
			active: true,
		},
		{
			id: 3,
			name: 'Jane Smith',
			active: false,
		},
		{
			id: 4,
			name: 'Johnny Longname',
			active: true,
		}
	];

	const followingCurrencies = [
		{
			currency: 'Bitcoin',
			symbol: 'BTC',
			price: 9497,
			lastDayChange: -0.55,
			lastWeekChange: 0.55,
		},
		{
			currency: 'Ethereum',
			symbol: 'ETH',
			price: 210.93,
			lastDayChange: 2.3,
			lastWeekChange: -2.3,
		},
		{
			currency: 'Bitcoin Cash',
			symbol: 'BCH',
			price: 305.14,
			lastDayChange: -1.92,
			lastWeekChange: 1.92,
		}
	]
	// initialProjects.sort((first, second) => second.last_modified - first.last_modified);
	// const [backtests, setBacktests] = useState(initialBacktests);
	const [projects, setProjects] = useState([]);

	

  const user = useContext(UserContext)
  if (user) {
  	// console.log(user);
    var dashboardWelcome = (
      <div><span className={styles.Welcome}>Welcome</span> {user.displayName}</div>
    );
  } else {
    {/* TODO: Remove when dashboard/editor is inaccessible without logging in */}
    var dashboardWelcome = (
      <div><span className={styles.Welcome}>Welcome</span> to your Dashboard</div>
    );
  }

  useEffect(() => {
  	if (!user) {
  		return;
  	}
		fetch(`https://transcoder-owoupooupa-uc.a.run.app/projects?user_id=${user.email}`, 
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((result) => {
      let newProjects = result.projects || [];
      newProjects = newProjects.map(project => ({
      	last_modified: dayjs(project.activationTime),
      	name: project.name,
      	parameters: JSON.parse(JSON.parse(project.parameters)),
      	id: project.projectId,
      }));
      newProjects.sort((first, second) => second.last_modified.unix() - first.last_modified.unix());
      setProjects(newProjects);
      // console.log(newProjects[0].parameters.action);
    })
	}, [user])

	const setProjectActive = (e, index) => {
		e.stopPropagation();
		const newProjects = [...projects];
		newProjects[index] = {
			...newProjects[index],
			active: !(projects[index].active)
		};
		setProjects(newProjects);
	}

	// const setBacktestActive = (index) => {
	// 	const newBacktests = [...backtests];
	// 	newBacktests[index] = {
	// 		...newBacktests[index],
	// 		active: !backtests[index].active
	// 	};
	// 	setBacktests(newBacktests);
	// }
	const projectCards = projects.map((project, index) => (<DashboardCard project key={index} setActive={(e) => setProjectActive(e, index)} {...project}/>));
	// const backtestCards = backtests.map((backtest, index) => (<DashboardCard key={index} setActive={() => setBacktestActive(index)} {...backtest}/>));
	return (
		<div className={styles.DashboardPage}>
			<Header selected={"Dashboard"} loggedIn={true}/>
			<div className={styles.Container}>
				<Column style={{width: "100%"}}>
					<div className={styles.WelcomeContainer}>
            {dashboardWelcome}
						<div className={styles.NewProject}>
							<Link to="/editor">
								<Button dark={state.darkMode} style={{paddingLeft: "40px", "paddingRight": "40px", borderRadius: "10px", fontSize: "16px", paddingTop: "8px", paddingBottom: "8px"}}>New Project</Button>
							</Link>
						</div>
					</div>
					<DashboardPanel darkMode={state.darkMode} style={{marginTop: "45px"}} title="Projects">
						{projectCards}
					</DashboardPanel>

					{/*<DashboardPanel darkMode={state.darkMode} style={{marginTop: "45px"}} title="Backtests">
						{backtestCards}
					</DashboardPanel>*/}
					<Row style={{marginTop: "47px"}}>
						<div className={styles.TeamPanel}>
							<Column style={{width: "100%"}}>
								<div className={styles.Title}>Team</div>
								{users.map((user, index) => (<TeamMember darkMode={state.darkMode} style={{marginTop: "16px"}} key={index} {...user}/>))}
							</Column>
						</div>
						<div className={styles.FollowingPanel}>
							<Column style={{width: "100%"}}>
								<div className={styles.Title}>Following</div>
								<CurrencyTable darkMode={state.darkMode} data={followingCurrencies}/>
							</Column>
						</div>
					</Row>
					
				</Column>
			</div>
		</div>
	);
};

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

export default DashboardPage;
