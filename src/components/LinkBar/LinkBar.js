import React from 'react';
import PropTypes from 'prop-types';
import {HeaderLink} from '../';
import styles from './LinkBar.module.scss';

const LinkBar = () => (
	<div className={styles.LinkBar}>
		<HeaderLink text="Price"/>
		<div className={styles.LinkWrapper}/>
		<HeaderLink text="Learn"/>
		<div className={styles.LinkWrapper}/>
		<HeaderLink text="Company"/>
		<div className={styles.LinkWrapper}/>
		<HeaderLink text="Community"/>
	</div>
);

LinkBar.propTypes = {};

LinkBar.defaultProps = {};

export default LinkBar;
