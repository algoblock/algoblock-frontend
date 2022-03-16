import React from 'react';
import PropTypes from 'prop-types';
import styles from './BacktestPage.module.scss';

const BacktestPage = (props) => {
  return (
    <div className={styles.BacktestPage}>
      <Header selected={""} loggedIn={true}/>
      <div className={styles.Container}>
        <div className={styles.ProjectBox}> 
          <div className={styles.ProjectName}>
            <div style={{marginBottom: "2px"}}>
              {name}
            </div>
          </div>
          
            
        </div>

        {/*<div className={styles.ProjectOverview}>
          Project overview goes here
        </div>
        <DashboardPanel darkMode={state.darkMode} style={{marginTop: "45px"}} title="Backtests">
          {backtestCards}
        </DashboardPanel>*/}
          
      </div>
    </div>
  );
};

BacktestPage.propTypes = {};

BacktestPage.defaultProps = {};

export default BacktestPage;
