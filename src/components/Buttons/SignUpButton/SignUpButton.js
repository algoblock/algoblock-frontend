import React from 'react';
import styles from './SignUpButton.module.scss';
import {createUserWithEmailPass} from "../../../firebase";

const SignUpButton = (props) => {
  function onClick() {
    if (props.first && props.last) {
      createUserWithEmailPass(props.email, props.pass, props.first + " " + props.last);
    } else {
      alert('Your name cannot be empty');
    }
  }

  return(
    <button className={styles.SignUpButton} onClick={onClick}>
        {props.children}
    </button>
  );
}

SignUpButton.propTypes = {};

SignUpButton.defaultProps = {};

export default SignUpButton;
