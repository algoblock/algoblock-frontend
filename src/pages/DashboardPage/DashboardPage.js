import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import {Header, Row, DashboardPanel, Column, InvertedButton, WideColumn, Link, CustomScroll} from '../../components';
import PropTypes from 'prop-types';
import styles from './DashboardPage.module.scss';
import {HeadshotPng} from '../../img';
import colors from '../../utilities/_export.module.scss';

const renderThumb = ({ style, ...props }) => {
    // const { top } = this.state;
    const thumbStyle = {
        backgroundColor: colors.primary,
        height: "10px",
        borderRadius: "5px",
        width: "100%",
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props}/>
    );
}

const DashboardPage = () => (
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
				<DashboardPanel title="Backtests" contentStyle={{padding: "80px"}}>
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
			</Column>
		</div>
	</div>
);

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

export default DashboardPage;
