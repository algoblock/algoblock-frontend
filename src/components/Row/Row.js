import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

const Row = (props) => {
	return (
		<div className={styles.Row} style={props.style}>
			{props.children}
		</div>
	)
};

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
