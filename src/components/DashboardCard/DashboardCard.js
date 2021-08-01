import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardCard.module.scss';

// {id: id, active: active, pnl: profit, position: position, currency: currency};

const DashboardCard = (props) => {
  return (
    <div className={styles.DashboardCard}>
      <div className={props.data.active ? styles.RunningIndicator : styles.StoppedIndicator}/>
      <div className={styles.ProjectName}>
        {props.data.name || "Project Name"}
      </div>
      <div className={styles.CardData}>
        {props.data.pnl < 0 ? "-" : ""}${Math.round(Math.abs(props.data.pnl) * 100) / 100}
      </div>
      <div className={styles.CardData}>
        {Math.round(props.data.position * 100) / 100 + " " + props.data.currency}
      </div>
    </div>
  );
};

DashboardCard.propTypes = {};

DashboardCard.defaultProps = {};

export default DashboardCard;
