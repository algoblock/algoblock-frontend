import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

const Row = (props) => (
  <div className={styles.Row}>
    {props.children}
  </div>
);

Row.propTypes = {};

Row.defaultProps = {};

export default Row;
