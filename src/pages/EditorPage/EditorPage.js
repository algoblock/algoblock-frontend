import React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../../App';
import PropTypes from 'prop-types';
import {Header, VerticalStepper, Row, SymbolsStep, EventsStep, StepContainer} from '../../components';
import lightModeStyles from './EditorPage.module.scss';
import darkModeStyles from './EditorPageDark.module.scss';

const EditorPage = (props) => {
  const {state} = useContext(Context);
  const [step, setStep] = useState(0);
  const [latest, setLatest] = useState(0);
  const [completed, setCompleted] = useState([false, false, false, false, false]);
  const [symbol, setSymbol] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);
  const events = []

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

  const nextStep = () => {
    setLatest(step + 1);
    setStep(step + 1);

  }
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  let steps = [<SymbolsStep nextStep={nextStep} setCompleted={setCurrentComplete} symbol={symbol} setSymbol={setSymbol}/>, <EventsStep toggleEventSelected={toggleEventSelected} setCompleted={setCurrentComplete} nextStep={nextStep}/>];
  const stepNames = ["Symbols", "Events", "Quantity limit", "Frequency", "Results"];
  return (
    <div className={styles.EditorPage}>
      <Header selected={"Editor"} loggedIn={true}/>
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
