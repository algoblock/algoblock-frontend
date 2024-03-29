import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {InvertedButton, Row} from '../';
import lightModestyles from './DashboardPanel.module.scss';
import darkModeStyles from './DashboardPanelDark.module.scss';

const DashboardPanel = (props) => {
  const [viewAll, setViewAll] = useState(false);
  let styles = props.darkMode ? darkModeStyles : lightModestyles;
  return (
    <div className={styles.DashboardPanel} style={props.style}>
      <div className={styles.Title}>
        <Row style={{alignItems: "center"}}>
          <div className={styles.TotalCount}>
            {props.children ? props.children.length : 0}
          </div>
          <div className={styles.TitleInner}>
            {props.title}
          </div>
        </Row>
        <InvertedButton onClick={() => setViewAll(!viewAll)} dark={!props.darkMode} white={props.darkMode}>
          {viewAll ? "Hide" : "View All"}
        </InvertedButton>
      </div>
      <div className={styles.Container}>
        <div className={styles.Contents} style={{...props.contentStyle}}>
          {props.children ? props.children.slice(0, viewAll ? props.children.length : 3) : null}
        </div>
      </div>
    </div>
  )
}

DashboardPanel.propTypes = {};

DashboardPanel.defaultProps = {};

export default DashboardPanel;
