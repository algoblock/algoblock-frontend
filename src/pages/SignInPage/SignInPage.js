import React from 'react';
import { useContext } from 'react';
import { Context } from '../../App';
import {Header, SignIn} from '../../components';
import PropTypes from 'prop-types';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
	const {state} = useContext(Context);
	return (
		<div className={styles.SignInPage}>
			<Header/>
			<div className={state.darkMode ? styles.SignInWrapperDark : styles.SignInWrapper}>
				<SignIn/>
			</div>
		</div>
	)
};

SignInPage.propTypes = {};

SignInPage.defaultProps = {};

export default SignInPage;
