import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalStepper.module.scss';

const VerticalStepper = (props) => {
  const stepNames = ["Symbols", "Event", "Quantity limit", "Frequency", "Results"];
  const steps = [];

  for (let stepName of stepNames) {
    steps.push((<div className={props.selected === stepName ? styles.Selected : styles.StepName}>{stepName}</div>))
  }

  return (
    <div>
      {steps}
    </div>
  );
};

VerticalStepper.propTypes = {};

VerticalStepper.defaultProps = {};

export default VerticalStepper;
