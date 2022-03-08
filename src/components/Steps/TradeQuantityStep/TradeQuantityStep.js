import React from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, Row} from '../../';
import styles from './TradeQuantityStep.module.scss';

const TradeQuantityStep = ({nextStep, symbol, quantity, setQuantity, setCompleted}) => {

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setCompleted(newQuantity > 0);
  }

  return (
    <div className={styles.TradeQuantityStep}>
      <Row style={{justifyContent: 'center', alignItems: 'center'}}>
        <input className={styles.NumberInput} value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} type="number" min={0} step={0.001} placeholder="Enter amount"/>
        <div className={styles.Symbol}>{symbol} per trade</div>
      </Row>
      <StepNextButton onClick={nextStep} style={{position: "absolute", bottom: "127px"}} disabled={quantity === "" || quantity <= 0}/>
    </div>
  );
};

TradeQuantityStep.propTypes = {};

TradeQuantityStep.defaultProps = {};

export default TradeQuantityStep;
