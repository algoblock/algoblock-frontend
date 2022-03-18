import React from 'react';
import PropTypes from 'prop-types';
import {MiniChart, Toggle} from '../';
import styles from './DashboardCard.module.scss';
import {useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration)

dayjs.extend(relativeTime);

// {id: id, active: active, pnl: profit, position: position, currency: currency};
// {id: 4, name: "Project #4", active": true, last_modified: 1644952934, currency: "BTC"}

const DashboardCard = (props) => {
  console.log(props);


  const history = useHistory();

  if (props.project) {
    return (
      <div onClick={() => history.push(`/projects/${props.id}`)} className={styles.DashboardCard}>
        <div className={styles.ProjectRow}>
          <div className={styles.ProjectName}>
            {props.name || "Untitled"}
          </div>
          <div className={styles.CardData}>
            {props.parameters.symbol}
          </div>
          <div style={{width: "calc(100% / 3)"}} className={styles.CardData}>
            Last modified: {props.last_modified.fromNow()}
          </div>
        </div>
        <Toggle active={props.active} onClick={props.setActive}/>
      </div>
    );
  } else if (props.backtest) {
    return (
      <div onClick={() => history.push(`/projects/${props.projectId}/backtests/${props.id}`)} className={styles.BacktestDashboardCard}>
        <div className={styles.BacktestRow}>
          <div className={styles.CardData}>
            Ran {props.dateRan.fromNow()}
          </div>
          <div className={styles.CardData}>
            {props.parameters.symbol}
          </div>
          {/*<div className={styles.CardData}>
            {Math.round(props.position * 100) / 100 + " " + props.currency}
          </div>*/}
          {/*<div className={styles.Chart}>
            <MiniChart/>
          </div>*/}
          <div className={styles.Period}>
            Period: {dayjs.duration(props.startTime.diff(props.endTime)).humanize()}
          </div>
        </div>
      </div>
    );
  }
};

DashboardCard.propTypes = {};

DashboardCard.defaultProps = {};

export default DashboardCard;
