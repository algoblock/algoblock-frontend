import React from 'react';
import { useContext } from 'react';
import { Context } from '../../App';
import {Header, SignUp, Link} from '../../components';
import PropTypes from 'prop-types';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
	const {state} = useContext(Context);
	return (
		<div className={styles.SignUpPage}>
			<Header/>
			<div className={state.darkMode ? styles.SignUpWrapperDark : styles.SignUpWrapper}>
				<SignUp/>
				<div className={styles.Terms}>
					By signing up, you agree to AlgoCube's&nbsp;<Link><span className={styles.Link}>Terms Of Use</span></Link>&nbsp;and&nbsp;<Link><span className={styles.Link}>Privacy Policy</span></Link>
				</div>
			</div>
		</div>
	);
}

SignUpPage.propTypes = {};

SignUpPage.defaultProps = {};

export default SignUpPage;
