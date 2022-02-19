import React from 'react';
import Modal from 'react-modal';
import { useState, useContext } from 'react';
import { Context } from '../../App';
import PropTypes from 'prop-types';
import {Header, VerticalStepper, Row, SymbolsStep, EventsStep, StepContainer, QuantityLimitStep, FrequencyStep, ActionStep} from '../../components';
import Slider from '@mui/material/Slider';
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

  const percentage = (n) => {
    return `${n}%`
  }

  const rsiBuyMarks = [
    {
      value: 0,
      label: 'Oversold',
    },
    {
      value: 30,
      label: 'Default',
    },
    {
      value: 50,
      label: 'Neutral',
    },
  ];

  const rsiSellMarks = [
    {
      value: 50,
      label: 'Neutral',
    },
    {
      value: 70,
      label: 'Default',
    },
    {
      value: 100,
      label: 'Overbought',
    },
  ];


  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "566px",
      boxSizing: "border-box",
      color: state.darkMode ? colors.white : colors.dark,
      backgroundColor: state.darkMode ? colors.dark : colors.white,
      border: `2px solid ${state.darkMode ? colors.white : colors.dark}`,
      borderRadius: "20px",
      overflow: "hidden",
    },
    overlay: {
      zIndex: 1,
      backgroundColor: state.darkMode ? "rgb(24, 24, 24, 0.75)" : "rgb(255, 255, 255, 0.75)",
    }
  };

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
    if (step + 1 > latest) {
      setLatest(step + 1);
    }
    
    setStep(step + 1);

  }
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  let steps = [
    <SymbolsStep nextStep={nextStep} setCompleted={setCurrentComplete} symbol={symbol} setSymbol={setSymbol} choices={symbols}/>,
    <ActionStep nextStep={nextStep} setCompleted={setCurrentComplete} action={action} setAction={setAction} symbol={symbol} quantity={quantity} frequency={frequency} frequencyUnit={frequencyUnit}/>,
    <EventsStep events={events} setVisibleModal={setVisibleModal} toggleEventSelected={toggleEventSelected} setCompleted={setCurrentComplete} nextStep={nextStep}/>,
    <QuantityLimitStep nextStep={nextStep} quantity={quantity} setQuantity={setQuantity} symbol={symbol} setCompleted={setCurrentComplete}/>,
    <FrequencyStep nextStep={nextStep} quantity={quantity} symbol={symbol} frequency={frequency} setFrequency={setFrequency} frequencyUnit={frequencyUnit} setFrequencyUnit={setFrequencyUnit} setCompleted={setCurrentComplete}/>];
  const stepNames = ["Symbols", "Actions", "Events", "Quantity limit", "Frequency"];
  return (
    <div className={styles.EditorPage}>
      <Header selected={"Editor"} loggedIn={true}/>
      <Modal
        isOpen={visibleModal === "overbought"}
        onRequestClose={() => setVisibleModal("")}
        style={modalStyles}
        contentLabel="Overbought/Oversold Modal"
      >
        <div className={styles.ModalTitle}>Overbought/Oversold</div>
        <div className={styles.ModalContent}>
          {action["buy"] && 
            <Row style={{justifyContent: "space-evenly"}}>
              <div className={styles.SliderLabel}>
                Buy:
              </div>
              <div className={styles.SliderContainer}>
                <Slider
                  aria-label="Buy slider"
                  defaultValue={30}
                  getAriaValueText={percentage}
                  step={1}
                  min={0}
                  max={50}
                  valueLabelDisplay="auto"
                  marks={rsiBuyMarks}
                  track={false}
                  sx={{
                    width: 300,
                    '& .MuiSlider-thumb': {
                      borderRadius: '1px',
                    },
                    '& .MuiSlider-markLabel': {
                      color: state.darkMode ? colors.white : colors.dark,
                    },
                    '& .MuiSlider-mark': {
                      backgroundColor: colors.primary,
                    }
                  }}
                />
              </div>
            </Row>
          }
          {action["sell"] && 
            <Row style={{justifyContent: "space-evenly"}}>
              <div className={styles.SliderLabel}>
                Sell:
              </div>
              <div className={styles.SliderContainer}>
                <Slider
                  aria-label="Buy slider"
                  defaultValue={70}
                  getAriaValueText={percentage}
                  step={1}
                  min={50}
                  max={100}
                  valueLabelDisplay="auto"
                  marks={rsiSellMarks}
                  track={false}
                  sx={{
                    width: 300,
                    '& .MuiSlider-thumb': {
                      borderRadius: '1px',
                    },
                    '& .MuiSlider-markLabel': {
                      color: state.darkMode ? colors.white : colors.dark,
                    },
                    '& .MuiSlider-mark': {
                      backgroundColor: colors.primary,
                    }
                  }}
                />
              </div>
            </Row>
          }
        </div>
        

      </Modal>
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
