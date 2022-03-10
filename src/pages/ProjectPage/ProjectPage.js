import React from 'react';
import { useState, useContext, useRef, useEffect } from 'react';
import { Context } from '../../App';
import { UserContext } from '../../providers/UserProvider';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import {Check} from '@mui/icons-material';
import {DashboardPanel, DashboardCard, Header, Column, Row, SearchableDropdown, BuySellButton, EventButton, OverboughtModal, LimitModal, OutlookModal} from '../../components';
import colors from '../../utilities/_export.module.scss';


import styles from './ProjectPage.module.scss';

const ProjectPage = (props) => {
  const {state} = useContext(Context);
  let { id } = useParams();
  console.log(`id: ${id}`)

  const [name, setName] = useState("Project Name");
  const [editingName, setEditingName] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);
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
  const [visibleModal, setVisibleModal] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tradeInterval, setTradeInterval] = useState("");
  const [tradeIntervalUnit, setTradeIntervalUnit] = useState("hour");
  const [action, setAction] = useState({"buy": false, "sell": false});
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
  const symbols = ["BTC", "ETH", "BNB", "USDT", "SOL", "USDC", "LTC", "ADA", "XRP"];

  const toggleEventSelected = (event) => {
    let newEvents = [...selectedEvents];
    let index = newEvents.indexOf(event);
    if (index !== -1) {
      newEvents.splice(index, 1);
    } else {
      newEvents.push(event);
    }
    setSelectedEvents(newEvents);
  }

  const cancelEvent = (event) => {

    setVisibleModal("");
  }

  const confirmEvent = (event) => {
    if (!selectedEvents.includes(event)) {
      toggleEventSelected(event);
    }
    setVisibleModal("");
  }

  const setSpecificEventParams = (event, newParams) => {
    const newEventParams = {...eventParams};
    newEventParams[event] = newParams;
    console.log(newEventParams);
    setEventParams(newEventParams);
  }

  const handleActionChange = (changedAction) => {
    let newAction = {...action};
    newAction[changedAction] = !newAction[changedAction];
    setAction(newAction);
  }


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

  const handleEventButtonClick = (event) => {
    if (selectedEvents.includes(event)) {
      toggleEventSelected(event);
    } else {
      setVisibleModal(event);
    }
  }

  const span = useRef();
  const input = useRef();
  const [width, setWidth] = useState(0);

  let eventButtons = [];

  for (let i=0; i < events.length; i += 2) {
    eventButtons.push(
      <Row>
        <div className={styles.EventButtonWrapperLeft}>
          <EventButton small selected={selectedEvents.includes(events[i].id)} onClick={() => handleEventButtonClick(events[i].id)} onEdit={() => setVisibleModal(events[i].id)}>{events[i].name}</EventButton>
        </div>
        <div className={styles.EventButtonWrapperRight}>
          {i + 1 < events.length && <EventButton small selected={selectedEvents.includes(events[i + 1].id)} onClick={() => handleEventButtonClick(events[i + 1].id)} onEdit={() => setVisibleModal(events[i + 1].id)}>{events[i + 1].name}</EventButton>}
        </div>
      </Row>)
  }

  const shake = () => {
    if (input.current.className === styles.ProjectNameInput) {
      setTimeout(() => {
        input.current.className = styles.ProjectNameInput;
      }, 900)
    }
    // input.current.style.animation = 'none';
    input.current.className = `${styles.ProjectNameInput} ${styles.Shake}`;
    // input.current.style.animation = 'none';
    // input.current.offsetHeight; /* trigger reflow */
    // input.current.style.animation = null; 
  }

  useEffect(() => {
    if (!span.current) {
      return;
    }
    setWidth(span.current.offsetWidth);
  }, [name, editingName]);

  return (
    <div className={styles.ProjectPage}>
      <Header selected={"Dashboard"} loggedIn={true}/>
      <OverboughtModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.overbought} setEventParams={(newParams) => setSpecificEventParams("overbought", newParams)} selected={selectedEvents.includes("overbought")}/>
      <LimitModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.limit} setEventParams={(newParams) => setSpecificEventParams("limit", newParams)} selected={selectedEvents.includes("limit")}/>
      <OutlookModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.outlook} setEventParams={(newParams) => setSpecificEventParams("outlook", newParams)} selected={selectedEvents.includes("outlook")}/>
      <div className={styles.Container}>
        <div className={styles.ProjectBox}>
          {editingName ? 
            <div className={styles.ProjectName}>
              <span className={styles.Hidden} ref={span}>{name}</span>
              <input ref={input} autoFocus style={{width: width}} className={styles.ProjectNameInput} value={name} onChange={(e) => {setName(e.target.value)}} type="text"/>
              <Check sx={{fontSize: 20, color: state.darkMode ? colors.white : colors.dark}} onClick={() => {
                  if (name) {
                    setEditingName(false);
                  } else {
                    shake();
                  }
                }} className={styles.EditButton}/>
            </div>
            :
            <div className={styles.ProjectName}>
              <div style={{marginBottom: "2px"}}>
                {name}
                <EditIcon sx={{fontSize: 20, color: state.darkMode ? colors.white : colors.dark}} onClick={() => {
                    setEditingName(true);

                  }} className={styles.EditButton}/>
              </div>
            </div>
          }
          {/* TODO: Switch rows and columns */}
          <Row style={{marginTop: "30px", justifyContent: "center"}}>
            <div className={styles.Label}>
              Symbol
            </div>
            <SearchableDropdown style={{flex: "2", width: "400px"}} text={symbol} setText={setSymbol} choices={symbols}/>
          </Row>
          <Row style={{marginTop: "20px", justifyContent: "center"}}>
            <div className={styles.Label}>
              Action
            </div>
            <Row style={{flex: "2", justifyContent: "flex-start", alignItems: "center", height: "65px", width: "400px"}}>
              <div className={styles.Wrapper}>
                <BuySellButton onClick={() => handleActionChange("buy")} selected={action["buy"]}>BUY</BuySellButton>
              </div>
              <div className={styles.Divider}/>
              <div className={styles.Wrapper}>
                <BuySellButton onClick={() => handleActionChange("sell")} selected={action["sell"]}>SELL</BuySellButton>
              </div>
            </Row>
          </Row>
          <Row style={{marginTop: "20px", alignItems: "center", justifyContent: "center"}}>
            <div className={styles.Label}>
              Events
            </div>
            <Column style={{flex: "2", justifyContent: "flex-start"}}>
              
              
              {eventButtons}
            </Column>
          </Row>
          <Row style={{marginTop: "20px", alignItems: "center", justifyContent: "center"}}>
            <div className={styles.Label}>
              Trade Quantity
            </div>
            <div className={styles.RightSide}>
              <input className={styles.NumberInput} value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" min={0} step={0.001} placeholder="Enter amount"/>
              <div className={styles.Symbol}>{symbol} per trade</div>
            </div>
          </Row>
          <Row style={{marginTop: "20px", alignItems: "center", justifyContent: "center"}}>
            <div className={styles.Label}>
              Trade Interval
            </div>
            <div className={styles.RightSide}>
              <input className={styles.NumberInput} value={tradeInterval} onChange={(e) => setTradeInterval(e.target.value)} type="number" min={1} max={99} step={1} placeholder="Enter period"/>
              <select className={styles.SelectInput} value={tradeIntervalUnit} onChange={(e) => setTradeIntervalUnit(e.target.value)} placeholder="Enter period">
                <option value="hour">Hours</option>
                <option value="day">Days</option>
                <option value="week">Weeks</option>
              </select>
            </div>
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

ProjectPage.propTypes = {};

ProjectPage.defaultProps = {};

export default ProjectPage;
