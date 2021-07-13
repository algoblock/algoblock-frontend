import React from 'react';
import {Header} from '../../components';
import PropTypes from 'prop-types';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => (
	<div className={styles.DashboardPage}>
		<Header loggedIn={true}/>
	</div>
);

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

export default DashboardPage;
