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
    </div>
  );
};

SymbolsStep.propTypes = {};

SymbolsStep.defaultProps = {};

export default SymbolsStep;
