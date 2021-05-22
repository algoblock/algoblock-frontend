import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import styles from './SignIn.module.scss';
import {SignInInput, Link, LogInButton, Button, GoogleSignInButton} from '../';
import {AlgoblockOnelineSvg} from '../../img';

const SignIn = () => (
  <div className={styles.SignIn}>
    <img src={AlgoblockOnelineSvg} width={230}/>
    <div className={styles.Title}>Welcome back!</div>
    <div className={styles.Login}>
    	<SignInInput type="email" placeholder="Email"/>
    	<div className={styles.InputSpacer}/>
    	<SignInInput type="password" placeholder="Password"/>
    	<div className={styles.ForgotPasswordSpacer}/>
    	<Link>
	    	<span className={styles.ForgotPassword}>Forgot password?</span>
	    </Link>
	    <div className={styles.LogInSpacer}/>
	    <div className={styles.CenterWrapper}>
		    <LogInButton>
		    	Log In
		    </LogInButton>
	    </div>
	    <div className={styles.OrDivider}>
	    	<div className={styles.Divider}/>
	    	<div className={styles.Or}>or</div>
	    	<div className={styles.Divider}/>
	    </div>
	    <div className={styles.CenterWrapper}>
		    <GoogleLogin
			    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
			    render={() => (<GoogleSignInButton/>)}
			    buttonText="Sign in with Google"
			    disabled={false}
			    onSuccess={() => {}}
			    onFailure={() => {}}
			    cookiePolicy={'single_host_origin'}
			  />
		</div>
    </div>
    <div className={styles.CenterWrapper}>
		<div className={styles.SignUpText}>
			Don't have an account?&nbsp;<Link><span className={styles.SignUpLink}>Sign up</span></Link>
		</div>
	</div>
  </div>
);

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
