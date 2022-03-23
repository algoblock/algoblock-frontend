import React from 'react';
import {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {LinkBar, SignInLink, SignOutLink, Button, Logo, ScrollingDivider, Link, Row} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';
import {ProfileSvg, DownArrowSvg} from '../../img';
import lightModestyles from './Header.module.scss';
import darkModeStyles from './HeaderDark.module.scss';
import { Context } from '../../App';
import { UserContext } from '../../providers/UserProvider';
import { DarkMode, LightMode, ExpandMore } from '@mui/icons-material';
import colors from '../../utilities/_export.module.scss';


const Header = (props) => {
	// console.log(props);

	const {state, dispatch} = useContext(Context);
  const user = useContext(UserContext);
  let styles = state.darkMode ? darkModeStyles : lightModestyles;
	if (user) {
		// console.log(user);
		var headerRight = (
      <div className={styles.HeaderSection}>
        {/* TODO: Put inside of profile dropdown */}
        <SignOutLink darkMode={state.darkMode}>
          Log Out
        </SignOutLink>
        <Link to="profile">
          <Row style={{alignItems: "center"}}>
            <div className={styles.UserProfile}>{user.displayName.split(" ")[0][0] + user.displayName.split(" ")[1][0]}</div>
            <ExpandMore sx={{fontSize: 24, color: state.darkMode ? colors.white : colors.dark}}/>
          </Row>
        </Link>
      </div>
		);
	} else {
		var headerRight = (
			<div className={styles.HeaderSection}>
				<SignInLink darkMode={state.darkMode}>
					Log In
				</SignInLink>
				<div className={styles.ButtonWrapper}>
					<Link to="/signup">
						<Button dark={state.darkMode}>
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		);
	}
	// console.log(headerRight);
	return (
		<div className={styles.Header}>
			<div className={styles.HeaderContents}>
				<div className={styles.LogoWrapper}>
					<Link to="/">
						<Logo darkMode={state.darkMode}/>
					</Link>
					<div className={styles.LogoSpacer}/>
				</div>
				<div className={styles.LinkBarWrapper}>
					<LinkBar selected={props.selected} loggedIn={props.loggedIn || false}/>
				</div>
				{headerRight}
				<div className={styles.DarkMode} onClick={() => dispatch({type: "DARKMODE", payload: {darkMode: !state.darkMode}})}>
					{state.darkMode ? (
						<LightMode sx={{color: colors.white}}/>) : (
						<DarkMode sx={{color: colors.dark}}/>)}
				</div>
			</div>
			<ScrollingDivider/>
		</div>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
