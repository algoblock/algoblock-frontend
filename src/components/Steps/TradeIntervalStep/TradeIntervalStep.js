import React from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, Row} from '../../';
import styles from './TradeIntervalStep.module.scss';

const TradeIntervalStep = ({nextStep, setCompleted, quantity, symbol, tradeInterval, setTradeInterval, tradeIntervalUnit, setTradeIntervalUnit}) => {

  const handleTradeIntervalChange = (newTradeInterval) => {
    setTradeInterval(newTradeInterval);
    setCompleted(newTradeInterval > 0 && newTradeInterval !== "");
  }

  const handleTradeIntervalUnitChange = (newTradeIntervalUnit) => {
    console.log(newTradeIntervalUnit);
    setTradeIntervalUnit(newTradeIntervalUnit);
  }

  return (
    <div className={styles.TradeIntervalStep}>
      <Row style={{justifyContent: 'center', alignItems: 'center'}}>
        <input className={styles.NumberInput} value={tradeInterval} onChange={(e) => handleTradeIntervalChange(e.target.value)} type="number" min={1} max={99} step={1} placeholder="Enter period"/>
        <select className={styles.SelectInput} value={tradeIntervalUnit} onChange={(e) => handleTradeIntervalUnitChange(e.target.value)} placeholder="Enter period">
          <option value="hour">Hours</option>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
        </select>
        <div className={styles.Interval}>between trades</div>
      </Row>
    </div>
  );
};

TradeIntervalStep.propTypes = {};

TradeIntervalStep.defaultProps = {};

export default TradeIntervalStep;
