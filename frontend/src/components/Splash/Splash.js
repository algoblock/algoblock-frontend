import React from 'react';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import {InvertedButton, Link} from '../';
import styles from './Splash.module.scss';
import {RocketSmallerPng} from '../../img';
import { Context } from '../../App';


const Splash = () => {
	const {state} = useContext(Context);
	return (
		<div className={styles.Splash}>
			<div className={styles.Left}>
				<div className={state.darkMode ? styles.TitleDark : styles.Title}>
					Build.<br/>
					Test.<br/>
					and Launch.
				</div>
				<div className={styles.Subtitle}>
					See your ideas come to life in <span className={styles.Line}>3, 2, 1</span>
				</div>
				<Link to="/signup">
					<InvertedButton big dark={!state.darkMode} white={state.darkMode}>
						Get Started
					</InvertedButton>
				</Link>
			</div>
			<div className={styles.Right}>
				<img src={RocketSmallerPng} width={"100%"} className={styles.SplashImage}/>
			</div>
		</div>
	)
};

Splash.propTypes = {};

Splash.defaultProps = {};

export default Splash;
