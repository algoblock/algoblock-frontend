import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, Row, BuySellButton} from '../../';
import styles from './ResultStep.module.scss';

const ResultStep = ({nextStep, setCompleted, result, setResult, symbol, quantity, frequencyUnit, frequency}) => {
  

  const handleResultChange = (newResult) => {
    setResult(newResult);
    setCompleted(newResult !== "");
  }

  return (
    <div className={styles.ResultStep}>
      <div className={styles.Strategy}>{quantity} {symbol} per {frequency} {frequencyUnit}s</div>
      <Row style={{justifyContent: "center", marginTop: "20px"}}>
        <BuySellButton onClick={() => handleResultChange("buy")} selected={result === "buy"}>BUY</BuySellButton>
        <div className={styles.Divider}/>
        <BuySellButton onClick={() => handleResultChange("sell")} selected={result === "sell"}>SELL</BuySellButton>
      </Row>
      <StepNextButton onClick={nextStep} style={{position: "absolute", bottom: "127px"}} disabled={result === ""}/>
    </div>
  );
};

ResultStep.propTypes = {};

ResultStep.defaultProps = {};

export default ResultStep;
