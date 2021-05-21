import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {LinkBar, SignInLink, Button, Logo, ScrollingDivider, Link} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';
import {AlgoblockPng} from '../../img';
import styles from './Header.module.scss';


const Header = () => {

	return (
		<div className={styles.Header}>
			<div className={styles.HeaderContents}>
				<div className={styles.LogoWrapper}>
					<Link to="/">
						<Logo/>
					</Link>
					<div className={styles.LogoSpacer}/>
				</div>
				<div className={styles.LinkBarWrapper}>
					<LinkBar/>
				</div>
				<div className={styles.HeaderSection}>
					<SignInLink>
						Log In
					</SignInLink>
					<div className={styles.ButtonWrapper}>
						<Button>
							Get Started
						</Button>
					</div>
				</div>
			</div>
			<ScrollingDivider/>
		</div>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
