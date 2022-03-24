import React from 'react';
import EventModalBase from '../EventModalBase/EventModalBase';
import PropTypes from 'prop-types';
import {Row} from '../../../';
import commonStyles from '../EventModals.module.scss';
import styles from './LimitModal.module.scss';

const LimitModal = ({visibleModal, setVisibleModal, action, darkMode, cancelEvent, confirmEvent, eventParams, setEventParams, selected}) => {

  const handleChange = (param, newValue) => {
    const newEventParams = {...eventParams};
    newEventParams[param] = newValue;
    setEventParams(newEventParams);
  }

  return (
    <EventModalBase darkMode={darkMode} visibleModal={visibleModal} setVisibleModal={setVisibleModal} eventId="limit" eventName="Limit order" cancelEvent={cancelEvent} confirmEvent={confirmEvent} selected={selected} info={"Buying a cryptocurrency at or below a set price, or to sell a cryptocurrency at or above the indicated price. For example, if ‘Buy Price’ is set to 1000 dollars, it will buy a cryptocurrency whenever it is below 1000 dollars. If ‘Sell Price’ is set to 2000 dollars, it will sell a cryptocurrency whenever it is above 2000 dollars."}>
      {action["buy"] && 
        <Row style={{justifyContent: "space-evenly", alignItems: "center", marginBottom: action["sell"] ? "20px" : "0px"}}>
          <div className={commonStyles.InputLabel}>
            Buy:
          </div>
          <input className={commonStyles.NumberInput} value={eventParams.buy} onChange={(e) => handleChange("buy", e.target.value)} type="number" min={0.01} step={0.01} placeholder="Enter price"/>
        </Row>
      }
      {action["sell"] && 
        <Row style={{justifyContent: "space-evenly", alignItems: "center"}}>
          <div className={commonStyles.InputLabel}>
            Sell:
          </div>
          <input className={commonStyles.NumberInput} value={eventParams.sell} onChange={(e) => handleChange("sell", e.target.value)} type="number" min={0.01} step={0.01} placeholder="Enter price"/>
        </Row>
      }
              
    </EventModalBase>
  );
};

LimitModal.propTypes = {};

LimitModal.defaultProps = {};

export default LimitModal;
