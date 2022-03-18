import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './BacktestPage.module.scss';
import {Chart, Header, Row, Column} from '../../components';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const BacktestPage = (props) => {
  const [name, setName] = useState("Backtest #1");
  let [lastEdited, setLastEdited] = useState(dayjs().subtract(Math.floor(Math.random() * 250), 'hours'));
  let [symbol, setSymbol] = useState("BTC");
  let [action, setAction] = useState({buy: true, sell: true});
  const [selectedEvents, setSelectedEvents] = useState(["overbought", "limit"]);
  const [eventParams, setEventParams] = useState({
    overbought: {
      buy: 30,
      sell: 70,
    },
    limit: {
      buy: 1500, // Should replace with current price of the selected crypto
      sell: 1500, // Should replace with current price of the selected crypto
    },
    outlook: {
      buy: 0,
      sell: 0,
    },
  });

  const delta = Math.floor((Math.random() * 500 - 250) * 100) / 100;

  const [quantity, setQuantity] = useState(2.3);
  const [tradeInterval, setTradeInterval] = useState(2);
  const [tradeIntervalUnit, setTradeIntervalUnit] = useState("hour");
  const [startTime, setStartTime] = useState(dayjs('2017-12-27'));
  const [endTime, setEndTime] = useState(dayjs('2018-05-14'));
  const [startingQuantity, setStartingQuantity] = useState(1000);
  const [finalValue, setFinalValue] = useState(1000 + delta);
  const [finalUsd, setFinalUsd] = useState(500)
  const [finalCryptoPrice, setFinalCryptoPrice] = useState(513);
  const [finalCrypto, setFinalCrypto] = useState((500 + delta) / finalCryptoPrice);
  const events = [
    {
      name: "Overbought/sold",
      id: "overbought",
    },
    {
      name: "Limit order",
      id: "limit",
    },
    {
      name: "Future outlook",
      id: "outlook",
    }
  ];

  const formatEvent = (eventId) => {
    return (
      <div className={styles.Event}>
        <span className={styles.EventName}>
          {events.filter((event) => event.id === eventId)[0].name}:{" "}
        </span>
        {JSON.stringify(eventParams[eventId])}
      </div>
    )
  }

  return (
    <div className={styles.BacktestPage}>
      <Header selected={""} loggedIn={true}/>
      <div className={styles.Container}>
        <div className={styles.ProjectBox}> 
          <div className={styles.ProjectNameContainer}>
            <div className={styles.ProjectName}>
              {name}
            </div>
            <div className={styles.LastEdited}>
              {lastEdited.fromNow()}
            </div>
          </div>
          <Chart width={800} height={450}/>
          <Row style={{width: "100%", marginTop: "32px", justifyContent: "space-around", alignItems: "stretch"}}>
            <Column style={{flex: "1", width: "100%", justifyContent: "center"}}>
              <div className={styles.ParamTitle}>
                Project Parameters
              </div>
              <div className={styles.ParametersContainer}>
                <Row style={{justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.ProjectLabel}>
                    Symbol
                  </div>
                  <div className={styles.ProjectParameter}>
                    {symbol}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.ProjectLabel}>
                    Actions
                  </div>
                  <div className={styles.ProjectParameter}>
                    {["Buy", "Sell"].filter((a) => action[a.toLowerCase()]).join(", ")}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.ProjectLabel}>
                    Events
                  </div>
                  <div className={styles.ProjectParameter}>
                    {selectedEvents.map(formatEvent)}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.ProjectLabel}>
                    Trade Quantity
                  </div>
                  <div className={styles.ProjectParameter}>
                    {quantity + " " + symbol}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.ProjectLabel}>
                    Trade Interval
                  </div>
                  <div className={styles.ProjectParameter}>
                    {tradeInterval + " " + tradeIntervalUnit + "s"}
                  </div>
                </Row>
              </div>
            </Column>
            <div className={styles.Divider}/>
            <Column style={{flex: "1", width: "100%", justifyContent: "center"}}>
              <div className={styles.ParamTitle}>
                Backtest Parameters
              </div>

              <div className={styles.ParametersContainer}>
                <Row style={{justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.BacktestLabel}>
                    Profit & Loss
                  </div>
                  <div className={styles.BacktestParameter}>
                    {startingQuantity > finalValue ? "-" : ""}${(Math.abs(finalValue - startingQuantity)).toFixed(2)} ({((finalValue - startingQuantity) / startingQuantity * 100).toFixed(2)}%)
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.BacktestLabel}>
                    Start
                  </div>
                  <div className={styles.BacktestParameter}>
                    {startTime.format("MM/DD/YYYY")}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.BacktestLabel}>
                    End
                  </div>
                  <div className={styles.BacktestParameter}>
                    {endTime.format("MM/DD/YYYY")}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.BacktestLabel}>
                    Starting Quantity
                  </div>
                  <div className={styles.BacktestParameter}>
                    ${startingQuantity.toFixed(2)}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.BacktestLabel}>
                    Updated Quantity (USD)
                  </div>
                  <div className={styles.BacktestParameter}>
                    ${finalUsd.toFixed(2)}
                  </div>
                </Row>
                <Row style={{marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                  <div className={styles.BacktestLabel}>
                    Updated Quantity ({symbol})
                  </div>
                  <div className={styles.BacktestParameter}>
                    {finalCrypto.toFixed(4)} {symbol} (${(finalCrypto * finalCryptoPrice).toFixed(2)})
                  </div>
                </Row>
              </div>
            </Column>
          </Row>
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
