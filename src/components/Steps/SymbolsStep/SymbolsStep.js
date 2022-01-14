import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {SearchableDropdown, StepNextButton} from '../../';
import styles from './SymbolsStep.module.scss';

const SymbolsStep = (props) => {
  let [symbol, setSymbol] = useState("");
  let choices = ["BTC", "ETH", "BNB", "USDT", "SOL", "USDC", "LTC", "ADA", "XRP"];
  return (
    <div className={styles.SymbolsStep}>
      
      <SearchableDropdown text={symbol} setText={setSymbol} choices={choices}/>
      <StepNextButton style={{position: "absolute", bottom: "127px"}} disabled={!choices.includes(symbol)}/>
    </div>
  );
};

SymbolsStep.propTypes = {};

SymbolsStep.defaultProps = {};

export default SymbolsStep;
