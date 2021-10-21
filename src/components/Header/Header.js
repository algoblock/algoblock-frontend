import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {LinkBar, SignInLink, Button, Logo, ScrollingDivider, Link, Row} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';
import {AlgoblockPng, ProfileSvg, DownArrowSvg} from '../../img';
import styles from './Header.module.scss';


const Header = (props) => {
	console.log(props);
	if (props.loggedIn) {
		var headerRight = (
			<Link to="profile">
				<Row style={{alignItems: "center"}}>
					<div className={styles.UserProfile}>JS</div>
					<img className={styles.DownArrow} src={DownArrowSvg} height={12}/>
				</Row>
			</Link>
		);
	} else {
		var headerRight = (
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
		);
	}
	console.log(headerRight);
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
					<LinkBar selected={props.selected} loggedIn={props.loggedIn || false}/>
				</div>
				{headerRight}
			</div>
			<ScrollingDivider/>
		</div>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
