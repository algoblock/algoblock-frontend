import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, Row, BuySellButton} from '../../';
import styles from './ActionStep.module.scss';

const ActionStep = ({nextStep, setCompleted, action, setAction, symbol, quantity, frequencyUnit, frequency}) => {
  

  const handleActionChange = (changedAction) => {
    let newAction = {...action};
    newAction[changedAction] = !newAction[changedAction];
    setAction(newAction);
    setCompleted(newAction["buy"] || newAction["sell"]);
  }

  return (
    <div className={styles.ActionStep}>
      <Row style={{justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
        <div className={styles.Wrapper}>
          <BuySellButton onClick={() => handleActionChange("buy")} selected={action["buy"]}>BUY</BuySellButton>
        </div>
        <div className={styles.Divider}/>
        <div className={styles.Wrapper}>
          <BuySellButton onClick={() => handleActionChange("sell")} selected={action["sell"]}>SELL</BuySellButton>
        </div>
      </Row>
      <StepNextButton onClick={nextStep} style={{position: "absolute", bottom: "127px"}} disabled={!action["buy"] && !action["sell"]}/>
    </div>
  );
};

ActionStep.propTypes = {};

ActionStep.defaultProps = {};

export default ActionStep;
