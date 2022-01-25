import React from 'react';
import {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../';
import {CheckSvg} from '../../img';
import lightModeStyles from './VerticalStepper.module.scss';
import darkModeStyles from './VerticalStepperDark.module.scss';
import { Context } from '../../App';

const VerticalStepper = (props) => {
  let [highestCompleted, setHighestCompleted] = useState(0);
  const {state} = useContext(Context);
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  let stepNames = props.stepNames;
  const steps = [];
  let postSelected = false;

  for (let i=0; i < stepNames.length; i++) {
    let stepName = stepNames[i];
    if (props.completed[i] && i > highestCompleted) {
      setHighestCompleted(i);
    }

    let step = [<div className={props.step === i ? styles.Selected : styles.StepName}>{stepName}</div>];


    
    if (i > props.latest) {
      step.push(<div className={styles.CircleContainer}><div className={styles.Circle}/></div>);
      steps.push(<div className={styles.NotClickable}><Row style={{alignItems: "center", justifyContent: "flex-end", height: "69px"}}>{step}</Row></div>);
    } else {
      if (props.completed[i]) {
        step.push(<div className={styles.CircleContainer}><div className={`${styles.CheckedCircle} ${styles.Circle}`}><img className={styles.Check} src={CheckSvg}/></div></div>);
      } else if (i < highestCompleted) {
        step.push(<div className={styles.CircleContainer}><div className={`${styles.Circle} ${styles.LargeCircle}`}><img className={styles.Uncheck} src={CheckSvg}/></div></div>);
      } else {
        step.push(<div className={styles.CircleContainer}><div className={`${styles.Circle} ${styles.LargeCircle}`}><img className={styles.NotChecked} src={CheckSvg}/></div></div>);
      }
      steps.push(<div onClick={() => {props.setStep(i)}} className={styles.Clickable}><Row style={{alignItems: "center", justifyContent: "flex-end", height: "69px"}}>{step}</Row></div>);
    }
    

    
  }



  return (
    <div>
      <Column style={{height: "65vh", justifyContent: "space-between", position: "relative"}}>
        {steps}
        <div className={styles.Line}/>
      </Column>
    </div>
  );
};

VerticalStepper.propTypes = {};

VerticalStepper.defaultProps = {};

export default VerticalStepper;