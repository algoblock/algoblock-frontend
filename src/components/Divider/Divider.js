import React from 'react';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';
import { Context } from '../../App';


const Divider = () => {
	const {state} = useContext(Context);

	return (<div className={state.darkMode ? styles.DividerDark : styles.Divider}/>);
};

Divider.propTypes = {};

Divider.defaultProps = {};

export default Divider;
