import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '../';
import styles from './HeaderLink.module.scss';

const HeaderLink = (props) => {

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
