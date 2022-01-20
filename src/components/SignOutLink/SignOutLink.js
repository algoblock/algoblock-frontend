import React from 'react';
import { signOut } from "../../firebase";
import styles from './SignOutLink.module.scss';

const SignOutLink = (props) => {
  function signOutProcedure() {
    signOut();
    window.location.reload();
  }
  return (
    <button className={props.darkMode ? styles.SignOutLinkDark : styles.SignOutLink} onClick={signOutProcedure}>
      {props.children}
    </button>
  );
}

SignOutLink.propTypes = {};

SignOutLink.defaultProps = {};

export default SignOutLink;
