import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {SearchableDropdown, StepNextButton} from '../../';
import styles from './SymbolsStep.module.scss';

const SymbolsStep = ({nextStep, setCompleted, symbol, setSymbol, choices}) => {
  

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
    setCompleted(choices.includes(newSymbol));
  }

  return (
    <div className={styles.SymbolsStep}>
      
      <SearchableDropdown text={symbol} setText={handleSymbolChange} choices={choices}/>
      <StepNextButton onClick={nextStep} style={{position: "absolute", bottom: "127px"}} disabled={!choices.includes(symbol)}/>
    </div>
  );
};

SymbolsStep.propTypes = {};

SymbolsStep.defaultProps = {};

export default SymbolsStep;
