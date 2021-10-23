import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvertedButton.module.scss';

const InvertedButton = (props) => {
  let className = `${styles.InvertedButton}`;
  className += props.variant === "black" ? ` ${styles.Black}` : "";
  return (
    <div onClick={props.onClick || undefined} className={className} style={props.style}>
      {props.children}
    </div>
  )
};

InvertedButton.propTypes = {};

InvertedButton.defaultProps = {};

export default InvertedButton;
