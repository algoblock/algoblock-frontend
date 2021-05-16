import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {LinkBar, SignInLink, Button, Logo, ScrollingDivider} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';
import algoblock from '../../img/algoblock.png';
import styles from './Header.module.scss';


const Header = () => {
	const [margin, setMargin] = useState(true);

	useScrollPosition(({ prevPos, currPos }) => {
		if (currPos.y < prevPos.y) {
			const newMargin = Math.min(Math.max(currPos.y + 23.0, 0), 23);
		  if (newMargin !== margin) {
		  	setMargin(newMargin);
		  }
		} else if (currPos.y === 23) {
			setMargin(23);
			window.scrollTo(0, 0)
		}
	  
	}, [margin])


	return (
		<div className={styles.Header}>
			<div className={styles.HeaderContents} style={{marginLeft: margin, marginRight: margin, marginBottom: margin}}>
				<div className={styles.LogoWrapper}>
					<Logo/>
				</div>
				<div className={styles.LinkBarWrapper}>
					<LinkBar/>
				</div>
				<div className={styles.HeaderSection}>
					<SignInLink text="Sign In"/>
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
