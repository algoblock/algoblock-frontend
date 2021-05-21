import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '../';
import styles from './SignInLink.module.scss';

const SignInLink = (props) => (
  <Link to="/login">
    <div className={styles.SignInLink}>
    	{props.children}
  	</div>
  </Link>
);

SignInLink.propTypes = {};

SignInLink.defaultProps = {};

export default SignInLink;
