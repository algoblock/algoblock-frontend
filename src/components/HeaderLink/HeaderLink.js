import React from 'react';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from '../';
import lightModeStyles from './HeaderLink.module.scss';
import darkModeStyles from './HeaderLinkDark.module.scss';
import { Context } from '../../App';

const HeaderLink = (props) => {
	const {state} = useContext(Context);
	let styles = state.darkMode ? darkModeStyles : lightModeStyles;
	return (
		<Link to={props.to} className={styles.NoUnderline}>
			<div className={props.selected ? styles.Selected : styles.HeaderLink}>
				{props.children}
			</div>
		</Link>
	);
};

HeaderLink.propTypes = {};

HeaderLink.defaultProps = {};

export default HeaderLink;
