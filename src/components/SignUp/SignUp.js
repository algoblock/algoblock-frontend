import React, {useContext, useEffect, useState} from 'react';
import styles from './SignUp.module.scss';
import {SignInInput, Link, SignUpButton, GoogleSignInButton} from '../';
import {AlgocubeOnelineSvg} from '../../img';
import {UserContext} from "../../providers/UserProvider";
import {Redirect} from "react-router-dom";

const SignUp = () => {
  // User object containing information about authentication status
  const user = useContext(UserContext);

  // Stateful collection of user information shared between components
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  // After successful authentication
  const [redirect, setredirect] = useState(null);
  useEffect(() => {
    if (user) {
      setredirect('/dashboard')
    }
  }, [user])
  if (redirect) {
    return <Redirect to={redirect}/>
  }

  return(
    <div className={styles.SignUp}>
      <img className={styles.Logo} src={AlgocubeOnelineSvg} width={230}/>
      <div className={styles.Title}>Let's get started</div>
      <div className={styles.UserInfo}>
        <SignInInput type="first_name" placeholder="First Name" setvalue={setfirst}/>
        <div style={{paddingRight: 7}}/>
        <SignInInput type="last_name" placeholder="Last Name" setvalue={setlast}/>
      </div>
      <div className={styles.Login}>
        <SignInInput type="email" placeholder="Email" setvalue={setemail}/>
        <div className={styles.InputSpacer}/>
        <SignInInput type="password" placeholder="Password" setvalue={setpass}/>
        <div className={styles.ForgotPasswordSpacer}/>
        <div className={styles.LogInSpacer}/>
        <div className={styles.CenterWrapper}>
          <SignUpButton email={email} pass={pass} first={first} last={last}>
            Sign Up
          </SignUpButton>
        </div>
        <div className={styles.OrDivider}>
          <div className={styles.Divider}/>
          <div className={styles.Or}>or</div>
          <div className={styles.Divider}/>
        </div>
        <div className={styles.CenterWrapper}>
          <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
        </div>
      </div>
      <div className={styles.CenterWrapper}>
        <div className={styles.SignUpText}>
          Already have an account?&nbsp;<Link to="/login"><span className={styles.SignUpLink}>Log in</span></Link>
        </div>
      </div>
    </div>
  );
}

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
