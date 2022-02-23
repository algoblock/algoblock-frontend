import React from 'react';
import EventModalBase from '../EventModalBase/EventModalBase';
import {Row} from '../../../';
import PropTypes from 'prop-types';
import commonStyles from '../EventModals.module.scss';
import Slider from '@mui/material/Slider';
import styles from './OverboughtModal.module.scss';
import colors from '../../../../utilities/_export.module.scss';


const OverboughtModal = ({visibleModal, setVisibleModal, action, darkMode, cancelEvent, confirmEvent, eventParams, setEventParams}) => {

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

  const handleChange = (param, newValue) => {
    const newEventParams = {...eventParams};
    newEventParams[param] = newValue;
    setEventParams(newEventParams);
  }

  return (
    <EventModalBase darkMode={darkMode} visibleModal={visibleModal} setVisibleModal={setVisibleModal} eventId="overbought" eventName="Overbought/Oversold" cancelEvent={cancelEvent} confirmEvent={confirmEvent}>
      {action["buy"] && 
        <Row style={{justifyContent: "space-evenly"}}>
          <div className={commonStyles.SliderLabel}>
            Buy:
          </div>
          <div className={commonStyles.SliderContainer}>
            <Slider
              aria-label="Buy slider"
              defaultValue={30}
              value={eventParams.buy}
              onChange={(event, newValue) => handleChange("buy", newValue)}
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
                  color: darkMode ? colors.white : colors.dark,
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
          <div className={commonStyles.SliderLabel}>
            Sell:
          </div>
          <div className={commonStyles.SliderContainer}>
            <Slider
              aria-label="Buy slider"
              defaultValue={70}
              value={eventParams.sell}
              onChange={(event, newValue) => handleChange("sell", newValue)}
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
                  color: darkMode ? colors.white : colors.dark,
                },
                '& .MuiSlider-mark': {
                  backgroundColor: colors.primary,
                }
              }}
            />
          </div>
        </Row>
      }             
    </EventModalBase>
  );
};

OverboughtModal.propTypes = {};

OverboughtModal.defaultProps = {};

export default OverboughtModal;
