import React from 'react';
import PropTypes from 'prop-types';
import styles from './StepNextButton.module.scss';

const StepNextButton = ({onClick, style, disabled, confirm}) => {
  return (
    <div style={style} onClick={disabled ? null : onClick} className={`${styles.StepNextButton} ${disabled ? styles.Disabled : ''}`}>
      {confirm ? "Confirm" : "Next"}
    </div>
  );
};

StepNextButton.propTypes = {};

StepNextButton.defaultProps = {};

export default StepNextButton;
