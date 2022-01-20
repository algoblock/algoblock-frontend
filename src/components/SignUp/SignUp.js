import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import styles from './SignUp.module.scss';
import {SignInInput, Link, LogInButton, Button, GoogleSignInButton} from '../';
import {AlgoblockOnelineSvg} from '../../img';

const SignUp = () => (
  <div className={styles.SignUp}>
    <img src={AlgoblockOnelineSvg} width={230}/>
    <div className={styles.Title}>Let's get started</div>
    <div className={styles.UserInfo}>
      <SignInInput type="first_name" placeholder="First Name"/>
      <div style={{paddingRight: 7}}/>
      <SignInInput type="last_name" placeholder = "Last Name"/>
    </div>
    <div className={styles.Login}>
    	<SignInInput type="email" placeholder="Email"/>
    	<div className={styles.InputSpacer}/>
    	<SignInInput type="password" placeholder="Password"/>
    	<div className={styles.ForgotPasswordSpacer}/>
	    <div className={styles.LogInSpacer}/>
	    <div className={styles.CenterWrapper}>
		    <LogInButton>
		    	Sign Up
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
			    render={() => (<GoogleSignInButton>Sign up with Google</GoogleSignInButton>)}
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
			Already have an account?&nbsp;<Link to="/login"><span className={styles.SignUpLink}>Log in</span></Link>
		</div>
	</div>
  </div>
);

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
