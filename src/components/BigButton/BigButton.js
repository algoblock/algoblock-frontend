import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../';
import styles from './BigButton.module.scss';

const BigButton = (props) => (
	<div className={styles.BigButton}>
		<Button style={{...{padding: "18px 22px", fontSize: "12px"}, ...props.style}}>
			{props.children}
		</Button>
	</div>
);

BigButton.propTypes = {};

BigButton.defaultProps = {};

export default BigButton;
