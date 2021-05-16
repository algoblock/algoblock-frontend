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
								<div className={styles.CardTitle}>No need to code a single line</div>
								<div className={styles.CardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel condimentum tellus. Sed scelerisque quam libero, et pulvinar mauris interdum vel. Integer consequat orci non ante hendrerit, a luctus orci sollicitudin.</div>
							</Card>
							<div className={styles.ColumnSpacer}/>
							<Card>
								<div className={styles.CardTitle}>
									Mix and match.
									<br/>
									Create your own parameters.
								</div>
								<div className={styles.CardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed aliquam dolor, a vehicula justo. Vivamus semper sit amet quam id molestie. Donec molestie orci in massa convallis, nec dictum ex maximus. </div>
							</Card>
						</div>
					</Column>
					<div className={styles.RowSpacer}/>
					<Column>
						<div className={styles.Column}>
							<Card>
								<div className={styles.CardTitle}>Community for all investors</div>
								<div className={styles.CardContent}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque ligula id porttitor molestie. Suspendisse viverra quam elit, in elementum mi tristique eget. Integer eu urna ligula.
									<img src={WalletPng} className={styles.WalletImage}/>
								</div>
							</Card>
							<div className={styles.ColumnSpacer}/>
							<Card>
								<div className={styles.CardTitle}>Comprehensive Platform</div>
								<div className={styles.CardContent}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna felis, interdum vitae condimentum ut, consectetur pulvinar sem. Donec rhoncus sapien sed urna feugiat, a dictum orci porttitor. Curabitur malesuada maximus augue, sed accumsan sapien blandit vitae.
									<img src={RevenuePng} className={styles.WalletImage}/>
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
