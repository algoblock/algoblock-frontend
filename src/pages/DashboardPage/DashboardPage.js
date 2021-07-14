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
			<Row alignItems="flex-start">
				<div className={styles.TopRow} style={{flex: 2.5}}>
					<DashboardPanel  title={(<div>Hello, <span style={{fontWeight: 400}}>John Smith </span></div>)}>
						<div className={styles.PanelContainer}>
							<Row alignItems="flex-start">
								<Column alignItems="center">
									<img src={HeadshotPng} width={80}/>
									<div className={styles.RowSpacer}/>
									<div className={styles.EditButton}>
										<InvertedButton>
											Edit Profile
										</InvertedButton>
									</div>
								</Column>
								<div className={styles.ColSpacer}/>
								<div style={{flex: 1}}>
									<Column>
										<div className={styles.UserName} style={{flex: 1}}>
											john.smith01
										</div>
										johnsmith@gmail.com<br/>
										Signed up today<br/>
										Some other account information
										<div className={styles.UserFooter}>
											Some less important stuff
										</div>
									</Column>
								</div>
								

							</Row>
						</div>
						
					</DashboardPanel>
				</div>
				<div className={styles.ColSpacer}/>
				<div className={styles.ColSpacer}/>
				<div className={styles.TopRow} style={{flex: 1}}>
					<DashboardPanel style={{flex: 1}} title={(<div style={{textAlign: "center"}}>Stats</div>)}>
						<div className={styles.PanelContainer}>
							<Row>
								<WideColumn alignItems="flex-end">
									<div>Lorem:</div>
									<div>Ipsum:</div>
									<div>Test:</div>
									<div>ROI:</div>
								</WideColumn>
								<div className={styles.ColSpacer}/>
								<div className={styles.ColSpacer}/>
								<div className={styles.ColSpacer}/>
								<WideColumn alignItems="flex-start">
									<div className={styles.Negative}>-5$</div>
									<div className={styles.Positive}>$37</div>
									<div className={styles.Negative}>-17%</div>
									<div className={styles.Positive}>55%</div>
								</WideColumn>
							</Row>
							<div className={styles.Underline}/>
							<Row>
								<WideColumn alignItems="flex-end">
									<div>Total:</div>
								</WideColumn>
								<div className={styles.ColSpacer}/>
								<div className={styles.ColSpacer}/>
								<div className={styles.ColSpacer}/>
								<WideColumn alignItems="flex-start">
									<div className={styles.Positive}>27%</div>
								</WideColumn>
							</Row>
						</div>
					</DashboardPanel>
				</div>
				<div className={styles.ColSpacer}/>
				<div className={styles.TopRow} style={{flex: 1.25}}>
					<DashboardPanel style={{flex: 1}} title={(<div style={{textAlign: "center"}}>Notifications</div>)}>
						<div className={styles.Notifications}>									
									<Row align="left">
										<div className={styles.TimeStamp}>
											[13:37]
										</div>
										<div className={styles.ColSpacer}/>
										<div className={styles.Notification}>
											Purchased 25xTSLA
										</div>
									</Row>
									
									<Row align="left">
										<div className={styles.TimeStamp}>
											[12:34]
										</div>
										<div className={styles.ColSpacer}/>
										<div className={styles.Notification}>
											Purchased 37xGOOGL
										</div>
									</Row>
									<Row align="left">
										<div className={styles.TimeStamp}>
											[12:27]
										</div>
										<div className={styles.ColSpacer}/>
										<div className={styles.Notification}>
											Sold 2500xEA
										</div>
									</Row>

							
							
						</div>
						<WideColumn alignItems="center">
							<Link to="notifications">
								<div className={styles.NotificationLink}>
									See all
								</div>
							</Link>
						</WideColumn>
						
					</DashboardPanel>
				</div>
			</Row>
			<div className={styles.RowSpacer}/>
			<div className={styles.RowSpacer}/>
			<div className={styles.ScrollRow}>
				<DashboardPanel  title={(<div>Backtests</div>)}>
				</DashboardPanel>
			</div>
			<div className={styles.RowSpacer}/>
			<div className={styles.RowSpacer}/>
			<div className={styles.ScrollRow}>
				<DashboardPanel contentStyle={{alignItems: "center", justifyContent: "center"}} title={(<div>Projects</div>)}>
					<CustomScroll>
						<div className={styles.ScrollContainer}>
							<Row>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
								<div className={styles.ColSpacer}/>
								<img src={HeadshotPng} width={240}/>
							</Row>
						</div>
					</CustomScroll>
				</DashboardPanel>
			</div>
		</div>
	</div>
);

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

export default DashboardPage;
