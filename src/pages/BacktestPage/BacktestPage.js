import React from 'react';
import {useState, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BacktestPage.module.scss';
import {Chart, Header, Row, Column, DashboardCard, LoadingAnimation} from '../../components';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const BacktestPage = (props) => {
  const location = useLocation();
  
  const initialParams = location.state || {
    name: "",
    symbol: "",
    selectedEvents: [],
    eventParams: {},
    quantity: "",
    tradeInterval: "",
    tradeIntervalUnit: "hour",
    action: {
      buy: false,
      sell: false,
    },
    startTime: dayjs(),
    endTime: dayjs(),
    startingQuantity: 0,
    dateRan: dayjs(),
  };
  const [name, setName] = useState(initialParams.name);
  let [lastEdited, setLastEdited] = useState(initialParams.dateRan);
  let [symbol, setSymbol] = useState(initialParams.symbol);
  let [action, setAction] = useState(initialParams.action);
  const [selectedEvents, setSelectedEvents] = useState(initialParams.selectedEvents);
  const defaultEventParams = {
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
  };
  const [eventParams, setEventParams] = useState({...defaultEventParams, ...initialParams.eventParams});


  const [quantity, setQuantity] = useState(initialParams.quantity);
  const [tradeInterval, setTradeInterval] = useState(initialParams.tradeInterval);
  const [tradeIntervalUnit, setTradeIntervalUnit] = useState(initialParams.tradeIntervalUnit);
  const [startTime, setStartTime] = useState(initialParams.startTime);
  const [endTime, setEndTime] = useState(initialParams.endTime);
  const [startingQuantity, setStartingQuantity] = useState(initialParams.startingQuantity);
  const [finalValue, setFinalValue] = useState(initialParams.startingQuantity);
  const [finalUsd, setFinalUsd] = useState(initialParams.startingQuantity);
  const [finalCryptoPrice, setFinalCryptoPrice] = useState(0);
  const [finalCrypto, setFinalCrypto] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [trades, setTrades] = useState([]);
  const [tradeAmounts, setTradeAmounts] = useState([]);
  const [loading, setLoading] = useState(true);
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

  let { projectId, backtestId } = useParams();

  useEffect(() => {
    if (location.state) {
      return;
    }
    fetch(`https://transcoder-owoupooupa-uc.a.run.app/backtest?algorithm_id=${projectId}&backtest_id=${backtestId}`, 
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      let {backtest, prices} = result;
      let tradesData = result.trades;
      let finalUsdValue = 0;
      let finalCryptoAmount = 0;
      if (tradesData) {
        setTrades(tradesData);
        let prevAmount = 0;
        let newTradeAmounts = [];
        for (let trade of tradesData) {
          newTradeAmounts.push(Math.abs(trade.cryptoQuantity - prevAmount));
          prevAmount = trade.cryptoQuantity;
        }
        setTradeAmounts(newTradeAmounts);
        finalUsdValue = tradesData[tradesData.length - 1].usdQuantity;
        finalCryptoAmount = tradesData[tradesData.length - 1].cryptoQuantity;
      } else {
        finalUsdValue = backtest.startingQuantity;
        finalCryptoAmount = 0;
      }
      
      setFinalUsd(finalUsdValue)
      setFinalCrypto(finalCryptoAmount);
      
      
      
      setCompleted(backtest.backtestComplete);
      setEndTime(dayjs(backtest.endTime));
      let parameters = JSON.parse(JSON.parse(backtest.parameters));
      setAction(parameters.action);
      setSelectedEvents(Object.keys(parameters.events));
      setEventParams({...eventParams, ...parameters.events});
      setTradeInterval(parameters.frequency);
      setTradeIntervalUnit(parameters.frequencyUnit);
      setSymbol(parameters.symbol);
      setQuantity(parameters.tradeQuantity);
      setName(backtest.projectName);
      setStartTime(dayjs(backtest.startTime));
      setStartingQuantity(backtest.startingQuantity);
      setLastEdited(dayjs(backtest.timestamp));
      setPriceData(result.prices || []);
      if (result.prices.length > 0) {
        setFinalValue(result.prices[result.prices.length - 1].price);

        setFinalCryptoPrice(finalCryptoAmount === 0 ? 0 : (result.prices[result.prices.length - 1].price - finalUsdValue) / finalCryptoAmount);
      } else {
        setFinalValue(backtest.startingQuantity);
        setFinalCryptoPrice(0);
      }
      setLoading(false);


    })
  }, [])


  let dashboardCards = trades.map((trade, index) => (<DashboardCard key={index} trade {...trade} symbol={symbol} amount={tradeAmounts[index]} />));

  const formatEvent = (eventId) => {
    return (
      <div key={eventId} className={styles.Event}>
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
              {!loading ? lastEdited.fromNow() : ""}
            </div>
          </div>
          {completed ? 
            <Chart data={priceData.length > 0 ? priceData : []} x={(d) => dayjs(d.time)} y={(d) => d.price} width={800} height={450}/> 
            :
            <div className={styles.LoadingContainer}>
              <LoadingAnimation text={loading ? "Loading..." : "Running backtest..."}/>
            </div>
          }
          {!loading ? 
            <div>
              <Row style={{width: "100%", marginTop: "32px", marginBottom: "32px", justifyContent: "space-around", alignItems: "stretch"}}>
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
              <div className={styles.ParamTitle}>
                Trades
              </div>
              {dashboardCards.length > 0 ?
                dashboardCards
                :
                <div className={styles.NoTrades}>
                  No trades executed
                </div>
              }
            </div>
            :
            null
          }
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
