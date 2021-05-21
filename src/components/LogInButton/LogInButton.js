import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../';
import styles from './LogInButton.module.scss';

const LogInButton = (props) => (
	<div className={styles.LogInButton} style={{...props.style}}>
			{props.children}
	</div>
);

LogInButton.propTypes = {};

LogInButton.defaultProps = {};

export default LogInButton;
