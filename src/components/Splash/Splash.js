import React from 'react';
import PropTypes from 'prop-types';
import {BigButton} from '../';
import styles from './Splash.module.scss';
import {SplashArtPng} from '../../img';


const Splash = () => (
	<div className={styles.Splash}>
		<div className={styles.Left}>
			<div className={styles.Title}>
				Build your <br/>
				own algorithm
			</div>
			<div className={styles.Subtitle}>
				It's easy as 1, 2, 3
			</div>
			<BigButton text="Get Started"/>
		</div>
		<div className={styles.Right}>
			<img src={SplashArtPng} width={"100%"}/>
		</div>
	</div>
);

Splash.propTypes = {};

Splash.defaultProps = {};

export default Splash;
