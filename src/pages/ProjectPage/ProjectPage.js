import React from 'react';
import { useState, useContext, useRef, useEffect, forwardRef } from 'react';
import { Context } from '../../App';
import { UserContext } from '../../providers/UserProvider';
import PropTypes from 'prop-types';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import {Check} from '@mui/icons-material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DashboardPanel, DashboardCard, Header, Column, Row, SearchableDropdown, BuySellButton, EventButton, OverboughtModal, LimitModal, OutlookModal, Button, LoadingAnimation} from '../../components';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import colors from '../../utilities/_export.module.scss';


import styles from './ProjectPage.module.scss';

dayjs.extend(customParseFormat);

const BacktestInput = forwardRef((props, ref) => {
  let {containerRef, ...restProps} = props;
  return (
    <input 
      {...restProps}
      onClick={(e) => {
        props.containerRef.current.className = styles.StartEnd;
        props.onClick(e);
      }}
      className={styles.BacktestDateInput}
      ref={ref}
      placeholder={new Date().toLocaleDateString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"})}
      />
  );
});

const ProjectPage = (props) => {
  const {state} = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const initialParams = location.state || {
    name: "Untitled",
    symbol: "",
    selectedEvents: [],
    eventParams: {},
    quantity: "",
    tradeInterval: "",
    tradeIntervalUnit: "hour",
    action: {
      buy: false,
      sell: false,
    }
  };

  let { projectId } = useParams();



  
  // console.log(`projectId: ${projectId}`)

  const [name, setName] = useState(initialParams.name);
  const [editingName, setEditingName] = useState(false);
  const [symbol, setSymbol] = useState(initialParams.symbol);
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
  const [visibleModal, setVisibleModal] = useState("");
  const [quantity, setQuantity] = useState(initialParams.quantity);
  const [tradeInterval, setTradeInterval] = useState(initialParams.tradeInterval);
  const [tradeIntervalUnit, setTradeIntervalUnit] = useState(initialParams.tradeIntervalUnit);
  const [action, setAction] = useState(initialParams.action);
  const [startTime, setStartTime] = useState("");
  const [startTimeString, setStartTimeString] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endTimeString, setEndTimeString] = useState("");
  const [startingQuantity, setStartingQuantity] = useState("");
  const [loading, setLoading] = useState(true);
  const [gotBacktests, setGotBacktests] = useState(false);
  const [startingBacktest, setStartingBacktest] = useState(false);
  const [backtests, setBacktests] = useState([]);
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

  const serializeParams = () => {
    let activeEvents = {};
    for (let eventId of selectedEvents) {
      activeEvents[eventId] = eventParams[eventId];
    }
    // console.log(activeEvents);
    return JSON.stringify({
      project_id: projectId,
      parameters: {
        action: action,
        symbol: symbol,
        events: activeEvents,
        frequency: tradeInterval,
        frequencyUnit: tradeIntervalUnit,
        tradeQuantity: quantity,
      },
      name: name,
    });
  }

  const [serializedParams, setSerializedParams] = useState(null);
  const [currentTimeout, setCurrentTimeout] = useState(null);

  useEffect(() => {
    clearTimeout(currentTimeout);
    let timeout = setTimeout(() => {
      console.log(name);
      let curParams = serializeParams();
      
      if (serializedParams !== null && curParams != serializedParams) {
        console.log("Are they different?");
        console.log(curParams);
        console.log(serializedParams);
        setSerializedParams(serializeParams());
        fetch(`https://transcoder-owoupooupa-uc.a.run.app/project`, 
        {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: curParams
        })
        .then(res => res.json())
        .then((result) => {
          // console.log(result);
          console.log("Updated!")
        })
      }
      
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
    setCurrentTimeout(timeout);
  }, [projectId, action, symbol, selectedEvents, eventParams, tradeInterval, tradeIntervalUnit, quantity, name])
  

  useEffect(() => {
    if (location.state) {
      setLoading(false);
      return;
    }
    fetch(`https://transcoder-owoupooupa-uc.a.run.app/project?project_id=${projectId}`, 
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((result) => {
      setName(result.name)
      let parameters = JSON.parse(JSON.parse(result.parameters));
      // console.log(result.parameters);
      // console.log(parameters);
      // console.log({...eventParams, ...parameters.events});
      setAction(parameters.action);
      setSelectedEvents(Object.keys(parameters.events));
      setEventParams({...eventParams, ...parameters.events});
      setTradeInterval(parameters.frequency);
      setTradeIntervalUnit(parameters.frequencyUnit);
      setSymbol(parameters.symbol);
      setQuantity(parameters.tradeQuantity);
      setLoading(false);
      let timeout = setTimeout(() => setSerializedParams(serializeParams()), 500);
      return () => {
        clearTimeout(timeout);
      }
      

    })
  }, [])

  useEffect(() => {
    fetch(`https://transcoder-owoupooupa-uc.a.run.app/backtests?algorithm_id=${projectId}`, 
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
      let newBacktests = result.backtests || [];
      newBacktests = newBacktests.map((backtest) => ({
        id: backtest.backtestId,
        startTime: dayjs(backtest.startTime),
        endTime: dayjs(backtest.endTime),
        dateRan: dayjs(backtest.timestamp),
        parameters: JSON.parse(JSON.parse(backtest.parameters)),
        startingQuantity: backtest.startingQuantity,
      }))
      newBacktests.sort((first, second) => second.dateRan.unix() - first.dateRan.unix());
      setBacktests(newBacktests);
      setGotBacktests(true);
    })
  }, [])

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
    // console.log(newEventParams);
    setEventParams(newEventParams);
  }

  const handleActionChange = (changedAction) => {
    let newAction = {...action};
    newAction[changedAction] = !newAction[changedAction];
    setAction(newAction);
  }

  const renderDayContents = (day, date, selected) => {
    // console.log(day);
    // console.log(date);
    selected = selected || new Date();
    // console.log(selected);
    let isSelected = selected.getDate() === date.getDate() && selected.getMonth() === date.getMonth() && selected.getYear() === date.getYear();
    return <div style={{color: isSelected ? colors.white : colors.black}} className={isSelected ? styles.DateDaySelected : styles.DateDay}>{day}</div>
  }

  

  const backtestCards = backtests.map((backtest, index) => (<DashboardCard projectId={projectId} backtest key={index} {...backtest}/>));

  const handleEventButtonClick = (event) => {
    if (selectedEvents.includes(event)) {
      toggleEventSelected(event);
    } else {
      setVisibleModal(event);
    }
  }

  const span = useRef();
  const input = useRef();
  const startTimeRow = useRef();
  const startTimeInput = useRef();
  const endTimeRow = useRef();
  const endTimeInput = useRef();
  const startingQuantityInput = useRef();
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

  const shake = (el) => {
    console.log(el);
    if (!el.current) {
      return;
    }
    let classes = el.current.className ? el.current.className.split(' ') : [];
    if (!classes.includes(styles.Shake)) {
      setTimeout(() => {
        el.current.className = classes.join(' ');
      }, 900)
      el.current.className += ` ${styles.Shake}`;
    }
    // input.current.style.animation = 'none';
    
    // input.current.style.animation = 'none';
    // input.current.offsetHeight; /* trigger reflow */
    // input.current.style.animation = null; 
  }

  const startBacktest = () => {
    if (startingBacktest) {
      return;
    }
    if (startTime === "") {
      shake(startTimeRow);
    }
    if (endTime === "") {
      shake(endTimeRow);
    }
    if (startingQuantity === "") {
      shake(startingQuantityInput);
    }
    if (startTime === "" || endTime === "" || startingQuantity === "") {
      console.log('empty fields')
      return;
    }
    if (startingQuantity <= 0) {
      console.log('no quantity')
      shake(startingQuantityInput);
      return;
    }
    if (startTime > endTime) {
      console.log('invalid date range')
      shake(startTimeRow);
      return;
    }
    if (endTime > new Date()) {
      console.log('date in the future')
      shake(endTimeRow);
      return;
    }
    setStartingBacktest(true);
    fetch(`https://transcoder-owoupooupa-uc.a.run.app/backtest`, 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        algorithm_id: projectId,
        start_time: startTime.getTime(),
        end_time: endTime.getTime(),
        starting_quantity: startingQuantity
      })
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      history.push(`/projects/${projectId}/backtests/${result.backtestId}`);
    })
  }

  


  useEffect(() => {
    if (!span.current) {
      return;
    }
    setWidth(span.current.offsetWidth);
  }, [name, editingName]);



  return (
    <div className={styles.ProjectPage}>
      <Header selected={""} loggedIn={true}/>
      <OverboughtModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.overbought} setEventParams={(newParams) => setSpecificEventParams("overbought", newParams)} selected={selectedEvents.includes("overbought")}/>
      <LimitModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.limit} setEventParams={(newParams) => setSpecificEventParams("limit", newParams)} selected={selectedEvents.includes("limit")}/>
      <OutlookModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.outlook} setEventParams={(newParams) => setSpecificEventParams("outlook", newParams)} selected={selectedEvents.includes("outlook")}/>
      <div className={styles.Container}>
        <div className={styles.ProjectBox}>
          {(!loading && !startingBacktest) ?
            <div>
              {editingName ? 
                <div className={styles.ProjectName}>
                  <span className={styles.Hidden} ref={span}>{name}</span>
                  <input ref={input} autoFocus style={{width: width}} className={styles.ProjectNameInput} value={name} onChange={(e) => {setName(e.target.value)}} type="text"/>
                  <Check sx={{fontSize: 20, color: state.darkMode ? colors.white : colors.dark}} onClick={() => {
                      if (name) {
                        setEditingName(false);
                      } else {
                        shake(input);
                      }
                    }} className={styles.EditButton}/>
                </div>
                :
                <div className={styles.ProjectName}>
                  <div style={{borderBottom: `2px solid ${colors.transparent}`}}>
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
                  Actions
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

              <div className={styles.BacktestSetup}>
                <div ref={startTimeRow} className={styles.StartEnd}>
                  <div className={styles.StartLabel}>
                    Start:
                  </div>
                  <DatePicker 
                    customInput={<BacktestInput containerRef={startTimeRow} ref={startTimeInput}/>}
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    renderDayContents={(day, date) => renderDayContents(day, date, startTime)} />
                </div>
                <div ref={endTimeRow} className={styles.StartEnd}>
                  <div className={styles.StartLabel}>
                    End:
                  </div>
                  <DatePicker 
                    customInput={<BacktestInput containerRef={endTimeRow} ref={endTimeInput}/>}
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    renderDayContents={(day, date) => renderDayContents(day, date, endTime)} />
                </div>
                <div ref={startingQuantityInput} className={styles.StartingQuantity}>
                  <div className={styles.QuantityLabel}>
                    Starting Quantity:
                  </div>
                  <input className={styles.BacktestInput} placeholder="USD" value={startingQuantity} onChange={(e) => setStartingQuantity(e.target.value)} type="number" min={0} step={1} />
                </div>
                <Button onClick={startBacktest} transparent>
                  Run
                </Button>
              </div>
              {gotBacktests ? 
                backtestCards
                :
                <LoadingAnimation text="Loading..." />
              }
            </div>
            :
            <LoadingAnimation text={startingBacktest ? "Starting backtest..." : "Loading..."} />
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

ProjectPage.propTypes = {};

ProjectPage.defaultProps = {};

export default ProjectPage;
