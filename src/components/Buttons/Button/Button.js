import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => (
  <div onClick={props.onClick || undefined} className={styles.Button} style={props.style}>
    {props.children}
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
