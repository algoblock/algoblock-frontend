import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const Link = (props) => (
  <div className={styles.Link}>
    {props.text}
  </div>
);

Link.propTypes = {};

Link.defaultProps = {};

export default Link;
