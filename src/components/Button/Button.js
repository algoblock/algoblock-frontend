import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => (
  <div className={styles.Button} style={{padding: props.padding || "12px 7px 12px 7px"}}>
    {props.text}
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
