import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  let className = `${styles.Button}`;
  className += props.dark ? ` ${styles.Dark}` : "";
  className += props.darkBg ? ` ${styles.DarkBg}` : "";
  className += props.transparent ? ` ${styles.Transparent}` : "";
  return (
    <div onClick={props.onClick || undefined} className={className} style={props.style}>
      {props.children}
    </div>
  )
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
