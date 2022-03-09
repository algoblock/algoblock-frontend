import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuySellButton.module.scss';

const BuySellButton = ({onClick, children, selected}) => {
  return (
    <div className={`${styles.BuySellButton} ${selected ? styles.Selected : ""}`} onClick={onClick || undefined}>
      <div>
        {children}
      </div>
    </div>
  );
};

BuySellButton.propTypes = {};

BuySellButton.defaultProps = {};

export default BuySellButton;
