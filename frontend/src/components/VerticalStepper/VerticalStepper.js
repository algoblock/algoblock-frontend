import React from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../';
import {CheckSvg} from '../../img';
import styles from './VerticalStepper.module.scss';

const VerticalStepper = (props) => {
  const stepNames = ["Symbols", "Event", "Quantity limit", "Frequency", "Results"];
  const steps = [];
  let postSelected = false;

  for (let stepName of stepNames) {
    if (stepName !== stepNames[0]) {
      steps.push(<Row style={{alignItems: "center", justifyContent: "flex-end"}}><div className={styles.Line}/></Row>);
    }
    let step = [<div className={props.selected === stepName ? styles.Selected : styles.StepName}>{stepName}</div>];


    
    if (postSelected) {
      step.push(<div className={styles.CircleContainer}><div className={styles.SmallCircle}/></div>);
    } else if (props.selected === stepName) {
      postSelected = true;
      if (props.currentCompleted) {
        step.push(<div className={styles.CheckedCircle}><img src={CheckSvg}/></div>);
      } else {
        step.push(<div className={styles.LargeCircle}/>);
      }
    } else {
      step.push(<div className={styles.CheckedCircle}><img src={CheckSvg}/></div>);
    }
    

    steps.push(<Row style={{alignItems: "center", justifyContent: "flex-end"}}>{step}</Row>);
  }



  return (
    <div>
      <Column>
        {steps}
      </Column>
    </div>
  );
};

VerticalStepper.propTypes = {};

VerticalStepper.defaultProps = {};

export default VerticalStepper;
