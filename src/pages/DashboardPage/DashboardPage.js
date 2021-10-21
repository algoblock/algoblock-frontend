import React from 'react';
import {useState} from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import {Header, Row, DashboardPanel, Column, InvertedButton, WideColumn, Link, DashboardCard, MiniChart, Button} from '../../components';
import PropTypes from 'prop-types';
import styles from './DashboardPage.module.scss';
import {HeadshotPng} from '../../img';
import colors from '../../utilities/_export.module.scss';


const DashboardPage = () => {
	const initialBacktests = [
	    {
	        "id": 0,
	        "name": "Project #0",
	        "active": false,
	        "pnl": -193.78739768240672,
	        "position": 2.087464427309367,
	        "currency": "BNB",
	        "period": 24
	    },
	    {
	        "id": 1,
	        "name": "Project #1",
	        "active": false,
	        "pnl": -203.14029014725676,
	        "position": 2.102340856933121,
	        "currency": "ADA",
	        "period": 22
	    },
	    {
	        "id": 2,
	        "name": "Project #2",
	        "active": true,
	        "pnl": -227.40048317111183,
	        "position": 1.0332454583303086,
	        "currency": "USDT",
	        "period": 12
	    },
	    {
	        "id": 3,
	        "name": "Project #3",
	        "active": false,
	        "pnl": 93.15430104311883,
	        "position": 0.8069360321553631,
	        "currency": "BNB",
	        "period": 22
	    },
	    {
	        "id": 4,
	        "name": "Project #4",
	        "active": false,
	        "pnl": 179.33849730760255,
	        "position": 0.711914926374394,
	        "currency": "ADA",
	        "period": 6
	    },
	    {
	        "id": 5,
	        "name": "Project #5",
	        "active": false,
	        "pnl": -106.21883729536685,
	        "position": 2.1523815455733675,
	        "currency": "ADA",
	        "period": 3
	    },
	    {
	        "id": 6,
	        "name": "Project #6",
	        "active": true,
	        "pnl": -65.57468448621927,
	        "position": 1.4262508606556423,
	        "currency": "ADA",
	        "period": 12
	    },
	    {
	        "id": 7,
	        "name": "Project #7",
	        "active": false,
	        "pnl": 37.9264272588772,
	        "position": 0.9336841129534784,
	        "currency": "USDT",
	        "period": 9
	    },
	    {
	        "id": 8,
	        "name": "Project #8",
	        "active": false,
	        "pnl": 214.83304478516573,
	        "position": 2.034428965364627,
	        "currency": "ADA",
	        "period": 16
	    },
	    {
	        "id": 9,
	        "name": "Project #9",
	        "active": true,
	        "pnl": 182.68949519625022,
	        "position": 2.3180706342119373,
	        "currency": "ADA",
	        "period": 22
	    }
	];
	const initialProjects = [
	    {
	        "id": 0,
	        "name": "Project #0",
	        "active": true,
	        "pnl": 104.60510576658635,
	        "position": 0.1755292783892487,
	        "currency": "USDT",
	        "period": 4
	    },
	    {
	        "id": 1,
	        "name": "Project #1",
	        "active": true,
	        "pnl": -55.46128473713986,
	        "position": 0.03688041585514945,
	        "currency": "BNB",
	        "period": 24
	    },
	    {
	        "id": 2,
	        "name": "Project #2",
	        "active": false,
	        "pnl": -89.42744516090207,
	        "position": 1.5330872105588678,
	        "currency": "BNB",
	        "period": 19
	    },
	    {
	        "id": 3,
	        "name": "Project #3",
	        "active": true,
	        "pnl": 214.57727668857075,
	        "position": 2.395254191232313,
	        "currency": "ADA",
	        "period": 8
	    },
	    {
	        "id": 4,
	        "name": "Project #4",
	        "active": true,
	        "pnl": -61.189104142092106,
	        "position": 2.212254882790357,
	        "currency": "BTC",
	        "period": 4
	    }
	];
	const [backtests, setBacktests] = useState(initialBacktests);
	const [projects, setProjects] = useState(initialProjects);

	const setProjectActive = (index) => {
		const newProjects = [...projects];
		newProjects[index] = {
			...newProjects[index],
			active: !(projects[index].active)
		};
		setProjects(newProjects);
	}

	const setBacktestActive = (index) => {
		const newBacktests = [...backtests];
		newBacktests[index] = {
			...newBacktests[index],
			active: !backtests[index].active
		};
		setBacktests(newBacktests);
	}
	const projectCards = projects.map((project, index) => (<DashboardCard key={index} setActive={() => setProjectActive(index)} {...project}/>));
	const backtestCards = backtests.map((backtest, index) => (<DashboardCard key={index} setActive={() => setBacktestActive(index)} {...backtest}/>));
	return (
		<div className={styles.DashboardPage}>
			<Header selected={"Dashboard"} loggedIn={true}/>
			<div className={styles.Container}>
				<Column style={{width: "100%"}}>
					<div className={styles.WelcomeContainer}>
						<div><span className={styles.Welcome}>Welcome</span> to your Dashboard</div>
						<div className={styles.NewProject}>
							<Button style={{paddingLeft: "40px", "paddingRight": "40px", borderRadius: "10px"}}>New Project</Button>
						</div>
					</div>
					<DashboardPanel style={{marginTop: "45px"}} title="Projects">
						{projectCards}
					</DashboardPanel>

					<DashboardPanel style={{marginTop: "45px"}} title="Backtests">
						{backtestCards}
					</DashboardPanel>
					
				</Column>
			</div>
		</div>
	);
};

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

export default DashboardPage;
