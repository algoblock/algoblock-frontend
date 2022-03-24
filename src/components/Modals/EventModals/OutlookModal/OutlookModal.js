import React from 'react';
import EventModalBase from '../EventModalBase/EventModalBase';
import {Row} from '../../../';
import PropTypes from 'prop-types';
import commonStyles from '../EventModals.module.scss';
import Slider from '@mui/material/Slider';
import styles from './OutlookModal.module.scss';
import colors from '../../../../utilities/_export.module.scss';

const OutlookModal = ({visibleModal, setVisibleModal, action, darkMode, cancelEvent, confirmEvent, eventParams, setEventParams, selected}) => {

  const percentage = (n) => {
    return `${n}%`
  } 

  const fundingRateBuyMarks = [
    {
      value: 0,
      label: 'Neutral',
    },
    {
      value: 1,
      label: 'Positive',
    },
  ];

  const handleChange = (param, newValue) => {
    const newEventParams = {...eventParams};
    newEventParams[param] = newValue;
    setEventParams(newEventParams);
  }

  const fundingRateSellMarks = [
    {
      value: -1,
      label: 'Negative',
    },
    {
      value: 0,
      label: 'Neutral',
    },
  ];

  return (
    <EventModalBase darkMode={darkMode} visibleModal={visibleModal} setVisibleModal={setVisibleModal} eventId="outlook" eventName="Future outlook" cancelEvent={cancelEvent} confirmEvent={confirmEvent} selected={selected} info={"Coming soon"}>
      {action["buy"] && 
        <Row style={{justifyContent: "space-evenly"}}>
          <div className={commonStyles.SliderLabel}>
            Buy:
          </div>
          <div className={commonStyles.SliderContainer}>
            <Slider
              aria-label="Buy slider"
              defaultValue={0}
              value={eventParams.buy}
              onChange={(event, newValue) => handleChange("buy", newValue)}
              getAriaValueText={percentage}
              step={0.02}
              min={0}
              max={1}
              valueLabelDisplay="auto"
              marks={fundingRateBuyMarks}
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
              aria-label="Sell slider"
              defaultValue={0}
              value={eventParams.sell}
              onChange={(event, newValue) => handleChange("sell", newValue)}
              getAriaValueText={percentage}
              step={0.02}
              min={-1}
              max={0}
              valueLabelDisplay="auto"
              marks={fundingRateSellMarks}
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

OutlookModal.propTypes = {};

OutlookModal.defaultProps = {};

export default OutlookModal;
