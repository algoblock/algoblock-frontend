import React from 'react';
import EventModalBase from '../EventModalBase/EventModalBase';
import PropTypes from 'prop-types';
import {Row} from '../../../';
import commonStyles from '../EventModals.module.scss';
import styles from './LimitModal.module.scss';

const LimitModal = ({visibleModal, setVisibleModal, action, darkMode, cancelEvent, confirmEvent, eventParams, setEventParams}) => {

  const handleChange = (param, newValue) => {
    const newEventParams = {...eventParams};
    newEventParams[param] = newValue;
    setEventParams(newEventParams);
  }

  return (
    <EventModalBase darkMode={darkMode} visibleModal={visibleModal} setVisibleModal={setVisibleModal} eventId="limit" eventName="Limit order" cancelEvent={cancelEvent} confirmEvent={confirmEvent}>
      {action["buy"] && 
        <Row style={{justifyContent: "space-evenly", alignItems: "center", marginBottom: action["sell"] ? "20px" : "0px"}}>
          <div className={commonStyles.InputLabel}>
            Buy:
          </div>
          <input className={commonStyles.NumberInput} value={eventParams.buy} onChange={(event, newValue) => handleChange("buy", newValue)} type="number" min={0.01} step={0.01} placeholder="Enter price"/>
        </Row>
      }
      {action["sell"] && 
        <Row style={{justifyContent: "space-evenly", alignItems: "center"}}>
          <div className={commonStyles.InputLabel}>
            Sell:
          </div>
          <input className={commonStyles.NumberInput} value={eventParams.sell} onChange={(event, newValue) => handleChange("sell", newValue)} type="number" min={0.01} step={0.01} placeholder="Enter price"/>
        </Row>
      }             
    </EventModalBase>
  );
};

LimitModal.propTypes = {};

LimitModal.defaultProps = {};

export default LimitModal;
