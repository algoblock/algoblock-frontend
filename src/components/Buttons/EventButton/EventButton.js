import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventButton.module.scss';

const EventButton = ({selected, children, onClick}) => {
  return (
    <div className={`${styles.EventButton} ${selected ? styles.Selected : ""}`} onClick={onClick || undefined}>{children}</div>
  );
};

EventButton.propTypes = {};

EventButton.defaultProps = {};

export default EventButton;
