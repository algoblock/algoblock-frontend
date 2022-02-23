import React from 'react';
import Modal from 'react-modal';
import { useState, useContext } from 'react';
import { Context } from '../../App';
import PropTypes from 'prop-types';
import {Header, VerticalStepper, Row, SymbolsStep, EventsStep, StepContainer, QuantityLimitStep, FrequencyStep, ActionStep, InvertedButton, Button, OverboughtModal} from '../../components';
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
  const [eventParams, setEventParams] = useState({});
  const [visibleModal, setVisibleModal] = useState("");
  const [quantity, setQuantity] = useState("");
  const [frequency, setFrequency] = useState("");
  const [frequencyUnit, setFrequencyUnit] = useState("hour");
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
      id: "future",
    },
    {
      name: "Test",
      id: "test0",
    },
    {
      name: "Test",
      id: "test0",
    },
    {
      name: "Test",
      id: "test0",
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

  const nextStep = () => {
    if (step + 1 > latest) {
      setLatest(step + 1);
    }
    
    setStep(step + 1);

  }
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  let steps = [
    <SymbolsStep nextStep={nextStep} setCompleted={setCurrentComplete} symbol={symbol} setSymbol={setSymbol} choices={symbols}/>,
    <ActionStep nextStep={nextStep} setCompleted={setCurrentComplete} action={action} setAction={setAction} symbol={symbol} quantity={quantity} frequency={frequency} frequencyUnit={frequencyUnit}/>,
    <EventsStep events={events} setVisibleModal={setVisibleModal} selectedEvents={selectedEvents} toggleEventSelected={toggleEventSelected} setCompleted={setCurrentComplete} nextStep={nextStep}/>,
    <QuantityLimitStep nextStep={nextStep} quantity={quantity} setQuantity={setQuantity} symbol={symbol} setCompleted={setCurrentComplete}/>,
    <FrequencyStep nextStep={nextStep} quantity={quantity} symbol={symbol} frequency={frequency} setFrequency={setFrequency} frequencyUnit={frequencyUnit} setFrequencyUnit={setFrequencyUnit} setCompleted={setCurrentComplete}/>];
  const stepNames = ["Symbols", "Actions", "Events", "Quantity limit", "Frequency"];
  return (
    <div className={styles.EditorPage}>
      <Header selected={"Editor"} loggedIn={true}/>
      <OverboughtModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} action={action} darkMode={state.darkMode} cancelEvent={cancelEvent} confirmEvent={confirmEvent}/>
      <Row style={{marginTop: "5vh", justifyContent: "center", alignItems: "center"}}>
        <VerticalStepper setStep={setStep} stepNames={stepNames} step={step} latest={latest} completed={completed} completed={completed}/>
        <StepContainer title={stepNames[step]} number={step + 1}>
          {steps[step]}
        </StepContainer>
      </Row>
    </div>
  );
};

EditorPage.propTypes = {};

EditorPage.defaultProps = {};

export default EditorPage;
