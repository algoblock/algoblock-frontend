import React from 'react';
import styles from './LogInButton.module.scss';
import {signInWithEmailPass} from "../../../firebase";

const LogInButton = (props) => (
  <button className={styles.LogInButton} onClick={() => signInWithEmailPass(props.email, props.pass)}>
    {props.children}
  </button>
);

LogInButton.propTypes = {};

LogInButton.defaultProps = {};

export default LogInButton;
