import React from 'react';
import { useContext } from 'react';
import { Context } from '../../App';
import {Header, Splash, BackgroundGraph, Divider, Row, Column, Card, BigButton, InvertedButton, Squiggle, Link, LandingTitle, Demo} from '../../components';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.scss';
import {HandsPng, HandPng, BotPng, WalkPng} from '../../img';

const LandingPage = () => {
	const {state} = useContext(Context);
	return (
		<div className={styles.LandingPage}>
			<Header/>
			<Splash/>
			<div className={styles.Row}>
				<Row style={{justifyContent: "center"}}>
					<Column>
						<div className={styles.Column}>
							<Card topLeft className={styles.Card}>
								<div className={styles.CardTitleLight}>No need to write code</div>
								<div className={styles.CardContentLight}>
									<div className={styles.CardText}>
										Drag and drop blocks to create your customized strategy.
									</div>
									<img src={HandPng} className={styles.HandPng}/>
									<Link>
										<div className={styles.LearnMoreLight}>
											Learn More <span className={styles.Caret}>></span>
										</div>
									</Link>
								</div>
							</Card>
							<div className={styles.ColumnSpacer}/>
							<Card bottomLeft className={styles.Card}>
								<div className={styles.CardTitleLight}>Investing on autopilot</div>
								<div className={styles.CardContentLight}>
									<div className={styles.CardText}>
										Your trading strategy will keep working – even while you’re not.
									</div>
									<img src={BotPng} className={styles.BotPng}/>
									<Link>
										<div className={styles.LearnMoreLight}>
											Learn More <span className={styles.Caret}>></span>
										</div>
									</Link>
								</div>
							</Card>
						</div>
					</Column>
					<div className={styles.RowSpacer}/>
					<Column>
						<div className={styles.Column}>
							<Card topRight className={styles.Card}>
								<div className={styles.CardTitleLight}>Community for all investors</div>
								<div className={styles.CardContentLight}>
									<div className={styles.CardText}>
										Test, implement, share, and discuss your trading ideas.
									</div>
									<img src={HandsPng} className={styles.HandsPng}/>
									<Link>
										<div className={styles.LearnMoreLight}>
											Learn More <span className={styles.Caret}>></span>
										</div>
									</Link>
								</div>
							</Card>
							<div className={styles.ColumnSpacer}/>
							<Card bottomRight className={styles.Card}>
								<div className={styles.CardTitleDark}>Comprehensive platform</div>
								<div className={styles.CardContentDark}>
									<div className={styles.CardText}>
										The simplest way to invest in any assets, from crypto to stocks.
									</div>
									<img src={WalkPng} className={styles.WalkPng}/>
									<Link>
										<div className={styles.LearnMoreDark}>
											Learn More <span className={styles.Caret}>></span>
										</div>
									</Link>
								</div>
							</Card>
						</div>
					</Column>
				</Row>
			</div>
		</div>
	)
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
