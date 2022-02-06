import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import styles from './SignIn.module.scss';
import {SignInInput, Link, LogInButton, GoogleSignInButton} from '../';
import {AlgocubeOnelineSvg} from '../../img';

function SignIn() {
  // User object containing information about authentication status
  const user = useContext(UserContext);

  // Stateful collection of user information shared between components
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

  return (
    <div className={styles.SignIn}>
      <img className={styles.Logo} src={AlgocubeOnelineSvg} width={200}/>
      <div className={styles.Title}>Welcome back!</div>
      <div className={styles.Login}>
        <SignInInput type="email" placeholder="Email" setvalue={setemail}/>
        <div className={styles.InputSpacer}/>
        <SignInInput type="password" placeholder="Password" setvalue={setpass}/>
        <div className={styles.ForgotPasswordSpacer}/>
        <Link>
          <span className={styles.ForgotPassword}>Forgot password?</span>
        </Link>
        <div className={styles.LogInSpacer}/>
        <div className={styles.CenterWrapper}>
          <LogInButton email={email} pass={pass}>
            Log In
          </LogInButton>
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
          Don't have an account?&nbsp;<Link to="/signup"><span className={styles.SignUpLink}>Sign up</span></Link>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
