import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../';
import styles from './BigButton.module.scss';

const BigButton = (props) => (
	<Button onClick={props.onClick} style={{...{padding: "18px 22px", fontSize: "18px", "minWidth": "169px"}, ...props.style}}>
		{props.children}
	</Button>
);

BigButton.propTypes = {};

BigButton.defaultProps = {};

export default BigButton;
