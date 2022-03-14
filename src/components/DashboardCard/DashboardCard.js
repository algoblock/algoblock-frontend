import React from 'react';
import PropTypes from 'prop-types';
import {MiniChart, Toggle} from '../';
import styles from './DashboardCard.module.scss';
import fromNow from '../../utilities/fromNow';
import {useHistory } from 'react-router-dom';

// {id: id, active: active, pnl: profit, position: position, currency: currency};
// {id: 4, name: "Project #4", active": true, last_modified: 1644952934, currency: "BTC"}

const DashboardCard = (props) => {
  console.log(props);

  const timeSince = (ts) => {
    let d = new Date(0);
    d.setSeconds(ts);
    return fromNow(d);
  }

  const history = useHistory();

  if (props.project) {
    return (
      <div onClick={() => history.push(`/projects/${props.id}`)} className={styles.DashboardCard}>
        <div className={styles.ProjectRow}>
          <div className={styles.ProjectName}>
            {props.name || "Project Name"}
          </div>
          <div className={styles.CardData}>
            {props.currency}
          </div>
          <div className={styles.CardData}>
            Last modified: {timeSince(props.last_modified)}
          </div>
        </div>
        <Toggle active={props.active} onClick={props.setActive}/>
      </div>
    );
  } else if (props.backtest) {
    return (
      <div onClick={() => history.push(`/backtests/${props.id}`)} className={styles.BacktestDashboardCard}>
        <div className={styles.BacktestRow}>
          <div className={styles.CardData}>
            Ran {timeSince(props.date_ran)}
          </div>
          <div className={styles.CardData}>
            {props.pnl < 0 ? "-" : ""}${Math.abs(props.pnl).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </div>
          <div className={styles.CardData}>
            {Math.round(props.position * 100) / 100 + " " + props.currency}
          </div>
          <div className={styles.Chart}>
            <MiniChart/>
          </div>
          <div className={styles.Period}>
            Period: {props.period} Days
          </div>
        </div>
      </div>
    );
  }
};

DashboardCard.propTypes = {};

DashboardCard.defaultProps = {};

export default DashboardCard;
