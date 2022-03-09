import React from 'react';
import Modal from 'react-modal';
import { useState, useContext } from 'react';
import { Context } from '../../App';
import PropTypes from 'prop-types';
import {Header, VerticalStepper, Row, SymbolsStep, EventsStep, StepContainer, TradeQuantityStep, TradeIntervalStep, ActionStep, InvertedButton, Button, OverboughtModal, LimitModal, OutlookModal, StepNextButton} from '../../components';
import lightModeStyles from './EditorPage.module.scss';
import darkModeStyles from './EditorPageDark.module.scss';
import colors from '../../utilities/_export.module.scss';

Modal.setAppElement('#root');

const EditorPage = (props) => {
  const {state} = useContext(Context);
  const [step, setStep] = useState(0);
  const [latest, setLatest] = useState(0);
  const [completed, setCompleted] = useState([false, false, false, false, false]);
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
      name: "Overbought/oversold",
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

  const setCurrentComplete = (complete) => {
    console.log(complete);
    let newCompleted = [...completed];
    newCompleted[step] = complete;
    setCompleted(newCompleted);
  }

  const toggleEventSelected = (event) => {
    let newEvents = [...selectedEvents];
    let index = newEvents.indexOf(event);
    if (index !== -1) {
      newEvents.splice(index, 1);
    } else {
      newEvents.push(event);
    }
    setCurrentComplete(newEvents.length > 0);
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


  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  
  const stepNames = ["Symbols", "Actions", "Events", "Trade Quantity", "Trade Interval"];

  const nextStep = () => {
    if (step === stepNames.length - 1) {
      return; // TODO: Should send data to backend in this case
    }
    if (step + 1 > latest) {
      setLatest(step + 1);
    }
    
    setStep(step + 1);
  }

  let steps = [
    <SymbolsStep nextStep={nextStep} setCompleted={setCurrentComplete} symbol={symbol} setSymbol={setSymbol} choices={symbols}/>,
    <ActionStep nextStep={nextStep} setCompleted={setCurrentComplete} action={action} setAction={setAction} symbol={symbol} quantity={quantity} tradeInterval={tradeInterval} tradeIntervalUnit={tradeIntervalUnit}/>,
    <EventsStep events={events} setVisibleModal={setVisibleModal} selectedEvents={selectedEvents} toggleEventSelected={toggleEventSelected} setCompleted={setCurrentComplete} nextStep={nextStep}/>,
    <TradeQuantityStep nextStep={nextStep} quantity={quantity} setQuantity={setQuantity} symbol={symbol} setCompleted={setCurrentComplete}/>,
    <TradeIntervalStep nextStep={nextStep} quantity={quantity} symbol={symbol} tradeInterval={tradeInterval} setTradeInterval={setTradeInterval} tradeIntervalUnit={tradeIntervalUnit} setTradeIntervalUnit={setTradeIntervalUnit} setCompleted={setCurrentComplete}/>];

  return (
    <div className={styles.EditorPage}>
      <Header selected={"Editor"} loggedIn={true}/>
      <OverboughtModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.overbought} setEventParams={(newParams) => setSpecificEventParams("overbought", newParams)} selected={selectedEvents.includes("overbought")}/>
      <LimitModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.limit} setEventParams={(newParams) => setSpecificEventParams("limit", newParams)} selected={selectedEvents.includes("limit")}/>
      <OutlookModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent} eventParams={eventParams.outlook} setEventParams={(newParams) => setSpecificEventParams("outlook", newParams)} selected={selectedEvents.includes("outlook")}/>
      <Row style={{marginTop: "5vh", justifyContent: "center", alignItems: "center"}}>
        <VerticalStepper setStep={setStep} stepNames={stepNames} step={step} latest={latest} completed={completed} completed={completed}/>
        <StepContainer title={stepNames[step]} number={step + 1}>
          {steps[step]}
          <div className={styles.Center}>
            <StepNextButton confirm={step === stepNames.length - 1} onClick={() => {
              nextStep();
              setCurrentComplete(true);
            }} style={{position: "absolute", bottom: "127px"}} disabled={!completed[step]}/>
          </div>
        </StepContainer>
      </Row>
    </div>
  );
};

EditorPage.propTypes = {};

EditorPage.defaultProps = {};

export default EditorPage;
