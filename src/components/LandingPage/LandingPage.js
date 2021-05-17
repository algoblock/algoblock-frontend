import React from 'react';
import {Header, Splash, BackgroundGraph, Divider, Row, Column, Card, BigButton, InvertedButton} from '../';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.scss';
import {WalletPng, RevenuePng} from '../../img';

const LandingPage = () => (
	<div className={styles.LandingPage}>
		<Header/>
			<Splash/>
			<div className={styles.Row}>
				<Row>
					<Column>
						<div className={styles.Column}>
							<div className={styles.ColumnHead}>
								<div className={styles.Title}>Algorithmic Trading Made Easy</div>
								<div className={styles.Subtitle}>Automate your trading strategies</div>
							</div>
							<Card>
								<div className={styles.CardTitle}>No need to write code</div>
								<div className={styles.CardContent}>Drag and drop blocks to create your customized strategy.</div>
							</Card>
							<div className={styles.ColumnSpacer}/>
							<Card>
								<div className={styles.CardTitle}>Investing on autopilot</div>
								<div className={styles.CardContent}>Your trading strategy will keep working – even while you’re not.</div>
							</Card>
						</div>
					</Column>
					<div className={styles.RowSpacer}/>
					<Column>
						<div className={styles.Column}>
							<Card>
								<div className={styles.CardTitle}>Community for all investors</div>
								<div className={styles.CardContent}>
									Test, implement, share, and discuss your trading ideas.
									<img src={WalletPng} className={styles.CardImage}/>
								</div>
							</Card>
							<div className={styles.ColumnSpacer}/>
							<Card>
								<div className={styles.CardTitle}>Comprehensive Platform</div>
								<div className={styles.CardContent}>
									The simplest way to invest in any assets, from crypto to stocks.
									<img src={RevenuePng} className={styles.CardImage}/>
								</div>
							</Card>
							<div className={styles.ColumnFoot}>
								<Row align="right">
									<BigButton text="Get Started"/>
									<div className={styles.ButtonSpacer}/>
									<InvertedButton text="Demo" padding="20px 16px 20px 16px"/>
								</Row>
							</div>
						</div>
					</Column>
				</Row>
			</div>
	</div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
