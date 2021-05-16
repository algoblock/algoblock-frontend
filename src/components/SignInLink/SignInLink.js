import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '../';
import styles from './SignInLink.module.scss';

const SignInLink = (props) => (
  <div className={styles.SignInLink}>
    <Link text={props.text}/>
  </div>
);

SignInLink.propTypes = {};

SignInLink.defaultProps = {};

export default SignInLink;
