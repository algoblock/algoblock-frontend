import React from 'react';
import PropTypes from 'prop-types';
import {MiniChart, Toggle} from '../';
import styles from './DashboardCard.module.scss';

// {id: id, active: active, pnl: profit, position: position, currency: currency};

const DashboardCard = (props) => {
  console.log(props);
  return (
    <div className={styles.DashboardCard}>
      <div className={styles.ProjectName}>
        {props.name || "Project Name"}
      </div>
      <div className={styles.CardData}>
        {props.pnl < 0 ? "-" : ""}${Math.round(Math.abs(props.pnl) * 100) / 100}
      </div>
      <div className={styles.CardData}>
        {Math.round(props.position * 100) / 100 + " " + props.currency}
      </div>
      <div className={styles.Chart}>
        <MiniChart/>
      </div>
      <div>
        Period: {props.period} Hours
      </div>
      <Toggle active={props.active} onClick={props.setActive}/>
    </div>
  );
};

DashboardCard.propTypes = {};

DashboardCard.defaultProps = {};

export default DashboardCard;
