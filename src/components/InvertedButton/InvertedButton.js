import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvertedButton.module.scss';

const InvertedButton = (props) => (
  <div className={styles.InvertedButton} style={{padding: props.padding || "12px 7px 12px 7px"}}>
    {props.text}
  </div>
);

InvertedButton.propTypes = {};

InvertedButton.defaultProps = {};

export default InvertedButton;
