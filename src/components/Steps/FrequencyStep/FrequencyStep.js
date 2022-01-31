import React from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, Row} from '../../';
import styles from './FrequencyStep.module.scss';

const FrequencyStep = ({nextStep, setCompleted, quantity, symbol, frequency, setFrequency, frequencyUnit, setFrequencyUnit}) => {

  const handleFrequencyChange = (newFrequency) => {
    setFrequency(newFrequency);
    setCompleted(newFrequency > 0 && newFrequency !== "");
  }

  const handleFrequencyUnitChange = (newFrequencyUnit) => {
    console.log(newFrequencyUnit);
    setFrequencyUnit(newFrequencyUnit);
  }

  return (
    <div className={styles.FrequencyStep}>
      <div className={styles.Amount}>{quantity} {symbol}</div>
      <div className={styles.Divider}/>
      <Row style={{justifyContent: 'center', alignItems: 'center'}}>
        <input className={styles.NumberInput} value={frequency} onChange={(e) => handleFrequencyChange(e.target.value)} type="number" min={1} max={99} step={1} placeholder="Enter period"/>
        <select className={styles.SelectInput} value={frequencyUnit} onChange={(e) => handleFrequencyUnitChange(e.target.value)} placeholder="Enter period">
          <option value="hour">Hours</option>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
        </select>
      </Row>
      
      <StepNextButton onClick={() => {
        nextStep();
        setCompleted(true);
      }} style={{position: "absolute", bottom: "127px"}} disabled={frequency === "0" || frequency === ""}/>
    </div>
  );
};

FrequencyStep.propTypes = {};

FrequencyStep.defaultProps = {};

export default FrequencyStep;
