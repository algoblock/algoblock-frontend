import React from 'react';
import PropTypes from 'prop-types';
import {HeaderLink} from '../';
import styles from './LinkBar.module.scss';

const LinkBar = () => (
	<div className={styles.LinkBar}>
		<HeaderLink>Price</HeaderLink>
		<div className={styles.LinkWrapper}/>
		<HeaderLink>Learn</HeaderLink>
		<div className={styles.LinkWrapper}/>
		<HeaderLink>Company</HeaderLink>
		<div className={styles.LinkWrapper}/>
		<HeaderLink>Community</HeaderLink>
	</div>
);

LinkBar.propTypes = {};

LinkBar.defaultProps = {};

export default LinkBar;
