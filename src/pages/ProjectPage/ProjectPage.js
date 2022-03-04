import React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../../App';
import { UserContext } from '../../providers/UserProvider';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {DashboardPanel, DashboardCard, Header} from '../../components';

import styles from './ProjectPage.module.scss';

const ProjectPage = (props) => {
  const {state} = useContext(Context);
  let { id } = useParams();
  console.log(`id: ${id}`)
  const initialBacktests = [
      {
          "id": 0,
          "date_ran": 1645672934,
          "pnl": -193.78739768240672,
          "position": 2.087464427309367,
          "currency": "BNB",
          "period": 24
      },
      {
          "id": 1,
          "date_ran": 1645672934,
          "pnl": -203.14029014725676,
          "position": 2.102340856933121,
          "currency": "ADA",
          "period": 22
      },
      {
          "id": 2,
          "date_ran": 1645672934,
          "pnl": -227.40048317111183,
          "position": 1.0332454583303086,
          "currency": "USDT",
          "period": 12
      },
      {
          "id": 3,
          "date_ran": 1645672934,
          "pnl": 93.15430104311883,
          "position": 0.8069360321553631,
          "currency": "BNB",
          "period": 22
      },
      {
          "id": 4,
          "date_ran": 1645672934,
          "pnl": 179.33849730760255,
          "position": 0.711914926374394,
          "currency": "ADA",
          "period": 6
      },
      {
          "id": 5,
          "date_ran": 1645672934,
          "pnl": -106.21883729536685,
          "position": 2.1523815455733675,
          "currency": "ADA",
          "period": 3
      },
      {
          "id": 6,
          "date_ran": 1645672934,
          "pnl": -65.57468448621927,
          "position": 1.4262508606556423,
          "currency": "ADA",
          "period": 12
      },
      {
          "id": 7,
          "date_ran": 1645672934,
          "pnl": 37.9264272588772,
          "position": 0.9336841129534784,
          "currency": "USDT",
          "period": 9
      },
      {
          "id": 8,
          "date_ran": 1645672934,
          "pnl": 214.83304478516573,
          "position": 2.034428965364627,
          "currency": "ADA",
          "period": 16
      },
      {
          "id": 9,
          "date_ran": 1645672934,
          "pnl": 182.68949519625022,
          "position": 2.3180706342119373,
          "currency": "ADA",
          "period": 22
      }
  ];

  initialBacktests.sort((first, second) => second.date_ran - first.date_ran);

  const [backtests, setBacktests] = useState(initialBacktests);

  const backtestCards = backtests.map((backtest, index) => (<DashboardCard backtest key={index} {...backtest}/>));

  return (
    <div className={styles.ProjectPage}>
      <Header selected={"Dashboard"} loggedIn={true}/>
      <div className={styles.Container}>
        <div className={styles.ProjectOverview}>
          Project overview goes here
        </div>
        <DashboardPanel darkMode={state.darkMode} style={{marginTop: "45px"}} title="Backtests">
          {backtestCards}
        </DashboardPanel>
      </div>
    </div>
  );
};

ProjectPage.propTypes = {};

ProjectPage.defaultProps = {};

export default ProjectPage;
