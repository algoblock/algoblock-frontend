import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvertedButton.module.scss';

const InvertedButton = (props) => (
  <div className={styles.InvertedButton} style={props.style}>
    {props.text}
  </div>
);

InvertedButton.propTypes = {};

InvertedButton.defaultProps = {};

export default InvertedButton;
