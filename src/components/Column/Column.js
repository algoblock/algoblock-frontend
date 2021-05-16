import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.module.scss';

const Column = (props) => (
  <div className={styles.Column}>
    {props.children}
  </div>
);

Column.propTypes = {};

Column.defaultProps = {};

export default Column;
