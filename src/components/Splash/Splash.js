import React from 'react';
import PropTypes from 'prop-types';
import {BigButton} from '../';
import styles from './Splash.module.scss';
import {RocketPng} from '../../img';


const Splash = () => (
	<div className={styles.Splash}>
		<div className={styles.Left}>
			<div className={styles.Title}>
				<span className={styles.Highlight}>Build.</span><br/>
				Test.<br/>
				and Launch.
			</div>
			<div className={styles.Subtitle}>
				See your ideas come to life in <span className={styles.Line}>3, 2, 1</span>
			</div>
			<BigButton text="Get Started"/>
		</div>
		<div className={styles.Right}>
			<img src={RocketPng} width={"100%"} className={styles.SplashImage}/>
		</div>
	</div>
);

Splash.propTypes = {};

Splash.defaultProps = {};

export default Splash;
