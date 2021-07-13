import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {LinkBar, SignInLink, Button, Logo, ScrollingDivider, Link} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';
import {AlgoblockPng} from '../../img';
import styles from './Header.module.scss';


const Header = (props) => {

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
					<LinkBar loggedIn={props.loggedIn || false}/>
				</div>
				<div className={styles.HeaderSection}>
					<SignInLink>
						Log In
					</SignInLink>
					<div className={styles.ButtonWrapper}>
						<Link to="/signup">
							<Button>
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<ScrollingDivider/>
		</div>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
