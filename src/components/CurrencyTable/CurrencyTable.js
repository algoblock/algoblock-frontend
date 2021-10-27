import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrencyTable.module.scss';

const CurrencyTable = ({data}) => {
  return (
    <div className={styles.Column}>
      <div className={styles.HeaderRow}>
        <div className={styles.HeaderName}>
          Name
        </div>
        <div className={styles.HeaderTitle}>
          Price
        </div>
        <div className={styles.HeaderTitle}>
          24H
        </div>
        <div className={styles.HeaderTitle}>
          7D
        </div>
      </div>
      {data.map((currency, index) => (
        <div className={styles.Row}>
          <div className={styles.Name}>
            {currency.currency} 
          </div>
          <div className={styles.Symbol}>
            {currency.symbol} 
          </div>
          <div className={styles.Price}>
            ${currency.price.toLocaleString('en-US', {minimumFractionDigits: 2})}
          </div>
          <div className={currency.lastDayChange >= 0 ? styles.LastDay : `${styles.LastDay} ${styles.Negative}`}>
            {(currency.lastDayChange >= 0 ? "+" : "") + currency.lastDayChange}%
          </div>
          <div className={currency.lastWeekChange >= 0 ? styles.LastWeek : `${styles.LastWeek} ${styles.Negative}`}>
            {(currency.lastWeekChange >= 0 ? "+" : "") + currency.lastWeekChange}%
          </div>
        </div>  
      ))}
    </div>
  );
};

CurrencyTable.propTypes = {};

CurrencyTable.defaultProps = {};

export default CurrencyTable;
