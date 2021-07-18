import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardPanel.module.scss';

const DashboardPanel = (props) => (
  <div className={styles.DashboardPanel}>
    <div className={styles.Title}>
      <div className={styles.Icon}/>
      <div className={styles.TitleInner}>
        {props.title}
      </div>
    </div>
    <div className={styles.Contents} style={{...props.contentStyle}}>
      {props.children}
    </div>
  </div>
);

DashboardPanel.propTypes = {};

DashboardPanel.defaultProps = {};

export default DashboardPanel;
