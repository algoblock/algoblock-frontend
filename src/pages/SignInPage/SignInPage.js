import React from 'react';
import {Header, SignIn} from '../../components';
import PropTypes from 'prop-types';
import styles from './SignInPage.module.scss';

const SignInPage = () => (
	<div className={styles.SignInPage}>
		<Header/>
		<div className={styles.SignInWrapper}>
			<SignIn/>
		</div>
	</div>
);

SignInPage.propTypes = {};

SignInPage.defaultProps = {};

export default SignInPage;
