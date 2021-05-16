import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

const Row = (props) => {
	let justifyContent = "center";
	switch (props.align) {
		case "center":
			justifyContent = "center";
			break;
		case "left":
			justifyContent = "flex-start";
			break;
		case "right":
			justifyContent = "flex-end";
			break;
	}
	return (
		<div className={styles.Row} style={{justifyContent: justifyContent}}>
			{props.children}
		</div>
	)
};

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
