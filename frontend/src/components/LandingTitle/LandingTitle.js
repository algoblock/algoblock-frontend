import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingTitle.module.scss';

const LandingTitle = (props) => (
  <div className={styles.LandingTitle}>
    {props.children}
  </div>
);

LandingTitle.propTypes = {};

LandingTitle.defaultProps = {};

export default LandingTitle;
