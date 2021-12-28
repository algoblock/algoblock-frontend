import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.module.scss';

const Column = (props) => (
  <div className={styles.Column} style={{...{alignItems: props.alignItems || "flex-start"}, ...props.style}}>
    {props.children}
  </div>
);

Column.propTypes = {};

Column.defaultProps = {};

export default Column;
