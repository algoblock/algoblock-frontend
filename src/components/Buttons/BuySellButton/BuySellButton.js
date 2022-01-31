import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuySellButton.module.scss';

const BuySellButton = ({onClick, children, selected}) => {
  return (
    <div className={`${styles.BuySellButton} ${selected ? styles.Selected : ""}`} onClick={onClick || undefined}>
      {children}
    </div>
  );
};

BuySellButton.propTypes = {};

BuySellButton.defaultProps = {};

export default BuySellButton;
