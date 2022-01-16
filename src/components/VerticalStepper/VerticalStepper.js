import React from 'react';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../';
import {CheckSvg} from '../../img';
import lightModeStyles from './VerticalStepper.module.scss';
import darkModeStyles from './VerticalStepperDark.module.scss';
import { Context } from '../../App';

const VerticalStepper = (props) => {
  const {state} = useContext(Context);
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  let stepNames = props.stepNames;
  const steps = [];
  let postSelected = false;

  for (let i=0; i < stepNames.length; i++) {
    let stepName = stepNames[i];
    if (stepName !== stepNames[0]) {
      steps.push(<Row style={{alignItems: "center", justifyContent: "flex-end"}}><div className={styles.Line}/></Row>);
    }
    let step = [<div className={props.step === i ? styles.Selected : styles.StepName}>{stepName}</div>];


    
    if (i > props.latest) {
      step.push(<div className={styles.CircleContainer}><div className={styles.SmallCircle}/></div>);
      steps.push(<Row style={{alignItems: "center", justifyContent: "flex-end"}}>{step}</Row>);
    } else {
      if (props.completed[i]) {
        step.push(<div className={styles.CheckedCircle}><img src={CheckSvg}/></div>);
      } else {
        step.push(<div className={styles.LargeCircle}/>);
      }
      steps.push(<div onClick={() => {props.setStep(i)}} className={styles.Clickable}><Row style={{alignItems: "center", justifyContent: "flex-end"}}>{step}</Row></div>);
    }
    

    
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