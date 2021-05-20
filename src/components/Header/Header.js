import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {LinkBar, SignInLink, Button, Logo, ScrollingDivider} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';
import {AlgoblockPng} from '../../img';
import styles from './Header.module.scss';


const Header = () => {

	return (
		<div className={styles.Header}>
			<div className={styles.HeaderContents}>
				<div className={styles.LogoWrapper}>
					<Logo/>
				</div>
				<div className={styles.LinkBarWrapper}>
					<LinkBar/>
				</div>
				<div className={styles.HeaderSection}>
					<SignInLink text="Log In"/>
					<div className={styles.ButtonWrapper}>
						<Button text="Get Started"/>
					</div>
				</div>
			</div>
			<ScrollingDivider/>
		</div>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
