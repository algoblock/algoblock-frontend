import React from 'react';
import {useState} from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import {Header, Row, DashboardPanel, Column, InvertedButton, WideColumn, Link, DashboardCard} from '../../components';
import PropTypes from 'prop-types';
import styles from './DashboardPage.module.scss';
import {HeadshotPng} from '../../img';
import colors from '../../utilities/_export.module.scss';

const currencies = ["BTC", "ETH", "USDT", "BNB", "ADA"];

const generate = (id) => {
	const active = Math.random() < 0.5;
	const profit = Math.random() * 500 - 250;
	const position = Math.random() * 2.5;
	const currency = currencies[Math.floor(Math.random() * currencies.length)];
	return {id: id, active: active, pnl: profit, position: position, currency: currency};
}

const DashboardPage = () => {
	const numBacktests = 10;
	const numProjects = 5;
	const initialBacktests = [];
	const initialProjects = [];
	for (let i=0; i < numBacktests; i++) {
		initialBacktests.push(generate(i));
	}
	for (let i=0; i < numProjects; i++) {
		initialProjects.push(generate(i));
	}
	const [backtests, setBacktests] = useState(initialBacktests);
	const [projects, setProjects] = useState(initialProjects);
	const [backtestRows, setBacktestRows] = useState(1);
	const [projectRows, setProjectRows] = useState(1);
	var backtestTable = [];
	let maxBacktestRows = Math.ceil(backtests.length / 3);
	for (let i=0; i < backtestRows; i++) {
		var cards = [];
		for (let j=0; j < 3; j++) {
			if (3 * i + j >= backtests.length) {
				cards.push(<div key={2 * j} className={styles.InvisibleCard}/>);
			} else {
				cards.push(
					<div key={2 * j} className={styles.Card}>
						<DashboardCard data={backtests[3 * i + j]}/>
					</div>
				);
			}
			
			if (j != 2) {
				cards.push(<div key={2 * j + 1} className={styles.GridSpacer}/>);
			}
		}
		backtestTable.push(<Row key={2 * i} style={{alignItems: "flex-start", width: "100%"}}>{cards}</Row>);
		if (i < backtestRows - 1) {
			backtestTable.push(<div className={styles.GridSpacer}/>);
		}
	}
	var projectTable = [];
	let maxProjectRows = Math.ceil(projects.length / 3);
	for (let i=0; i < projectRows; i++) {
		var cards = [];
		for (let j=0; j < 3; j++) {
			if (3 * i + j >= projects.length) {
				cards.push(<div key={2 * j} className={styles.InvisibleCard}/>);
			} else {
				cards.push(
					<div key={2 * j} className={styles.Card}>
						<DashboardCard data={projects[3 * i + j]}/>
					</div>
				);
			}
			
			if (j != 2) {
				cards.push(<div key={2 * j + 1} className={styles.GridSpacer}/>);
			}
		}
		projectTable.push(<Row key={2 * i} style={{alignItems: "flex-start", width: "100%"}}>{cards}</Row>);
		if (i < projectRows - 1) {
			projectTable.push(<div className={styles.GridSpacer}/>);
		}
	}

	return (
		<div className={styles.DashboardPage}>
			<Header selected={"Dashboard"} loggedIn={true}/>
			<div className={styles.Container}>
				<Column style={{width: "100%"}}>
					<div className={styles.Hello}>Hello, <span className={styles.HelloName}>John Smith</span></div>
					<div className={styles.Spacer}/>
					<DashboardPanel title="Dashboard" contentStyle={{padding: "80px"}}>
						<Row>
							<Column style={{alignItems: "center"}}>
								<img src={HeadshotPng} width={120}/>
								<div className={styles.RowSpacer}/>
								<InvertedButton>
									<div className={styles.EditButton}>
										Edit Profile
									</div>
								</InvertedButton>
							</Column>
							<div className={styles.ColSpacer}/>
							<Column style={{flex: 4}}>
								<div className={styles.Bold}>
									Company
								</div>
								<div className={styles.Bold} style={{marginBottom: "12px"}}>
									Name
								</div>
								<div className={styles.Description}>
									Description
								</div>
							</Column>
						</Row>
					</DashboardPanel>
					<div className={styles.Spacer}/>
					<div className={styles.Spacer}/>
					<Row>
						<DashboardPanel title="Backtests" contentStyle={{padding: "80px"}}>
							<Column style={{alignItems: "center", width: "100%"}}>
								{backtestTable}
								{backtestRows < maxBacktestRows ? 
									(<InvertedButton onClick={() => setBacktestRows(Math.min(backtestRows + 1, maxBacktestRows))} style={{marginBottom: "-49px", marginTop: "49px"}}>
										<div className={styles.EditButton}>
											Load more
										</div>
									</InvertedButton>)
									:
									(<InvertedButton onClick={() => setBacktestRows(1)} style={{marginBottom: "-49px", marginTop: "49px"}}>
										<div className={styles.EditButton}>
											Hide
										</div>
									</InvertedButton>)
								}
								
							</Column>
						</DashboardPanel>
						<div className={styles.ColSpacer}/>
						<div className={styles.ColSpacer}/>
						<DashboardPanel title="Projects" contentStyle={{padding: "80px"}}>
							<Column style={{alignItems: "center", width: "100%"}}>
								{projectTable}
								{projectRows < maxProjectRows ? 
									(<InvertedButton onClick={() => setProjectRows(Math.min(projectRows + 1, maxProjectRows))} style={{marginBottom: "-49px", marginTop: "49px"}}>
										<div className={styles.EditButton}>
											Load more
										</div>
									</InvertedButton>)
									:
									(<InvertedButton onClick={() => setProjectRows(1)} style={{marginBottom: "-49px", marginTop: "49px"}}>
										<div className={styles.EditButton}>
											Hide
										</div>
									</InvertedButton>)
								}
								
							</Column>
						</DashboardPanel>
					</Row>
				</Column>
			</div>
		</div>
	);
};

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

export default DashboardPage;
