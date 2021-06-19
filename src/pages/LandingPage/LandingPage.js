import React from 'react';
import {Header, Splash, BackgroundGraph, Divider, Row, Column, Card, BigButton, InvertedButton, Squiggle, Link} from '../../components';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.scss';
import {HandsPng, HandPng, BotPng, WalkPng} from '../../img';

const LandingPage = () => (
	<div className={styles.LandingPage}>
		<Header/>
		<Splash/>
		<Squiggle/>
		<div className={styles.Row}>
			<div className={styles.RowTitle}>
				Why use AlgoBlock to invest?
			</div>
			<Row>
				<Column>
					<div className={styles.Column}>
						<Card>
							<div className={styles.CardTitle}>No need to write code</div>
							<div className={styles.CardContent}>
								<div className={styles.CardText}>
									Drag and drop blocks to create your customized strategy.
								</div>
								<img src={HandPng} className={styles.HandPng}/>
								<Link>
									<div className={styles.LearnMore}>
										Learn More >
									</div>
								</Link>
							</div>
						</Card>
						<div className={styles.ColumnSpacer}/>
						<Card>
							<div className={styles.CardTitle}>Investing on autopilot</div>
							<div className={styles.CardContent}>
								<div className={styles.CardText}>
									Your trading strategy will keep working – even while you’re not.
								</div>
								<img src={BotPng} className={styles.BotPng}/>
								<Link>
									<div className={styles.LearnMore}>
										Learn More >
									</div>
								</Link>
							</div>
						</Card>
					</div>
				</Column>
				<div className={styles.RowSpacer}/>
				<Column>
					<div className={styles.Column}>
						<Card>
							<div className={styles.CardTitle}>Community for all investors</div>
							<div className={styles.CardContent}>
								<div className={styles.CardText}>
									Test, implement, share, and discuss your trading ideas.
								</div>
								<img src={HandsPng} className={styles.HandsPng}/>
								<Link>
									<div className={styles.LearnMore}>
										Learn More >
									</div>
								</Link>
							</div>
						</Card>
						<div className={styles.ColumnSpacer}/>
						<Card>
							<div className={styles.CardTitle}>Comprehensive platform</div>
							<div className={styles.CardContent}>
								<div className={styles.CardText}>
									The simplest way to invest in any assets, from crypto to stocks.
								</div>
								<img src={WalkPng} className={styles.WalkPng}/>
								<Link>
									<div className={styles.LearnMore}>
										Learn More >
									</div>
								</Link>
							</div>
						</Card>
					</div>
				</Column>
			</Row>
		</div>
		<div className={styles.Squiggle}>
			<Squiggle/>
		</div>
	</div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
