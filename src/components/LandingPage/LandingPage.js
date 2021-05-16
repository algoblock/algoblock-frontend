import React from 'react';
import {Header, Splash, BackgroundGraph, Divider, Row, Column} from '../';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.scss';

const LandingPage = () => (
	<div className={styles.LandingPage}>
		<Header/>
			<Splash/>
			<BackgroundGraph/>
			<div className={styles.Row}>
				<Row>
					<Column>
						<div className={styles.Column}>
							<div className={styles.Title}>Algorithmic Trading Made Easy</div>
							<div className={styles.Subtitle}>Automate your trading strategies</div>
						</div>
					</Column>
					<Column>
						<div className={styles.Column}>
							<div>Test</div>
							<div>Test2</div>
						</div>
					</Column>
				</Row>
			</div>
	</div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
