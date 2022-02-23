import React from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, EventButton, Row} from '../../';
import styles from './EventsStep.module.scss';

const EventsStep = ({nextStep, setCompleted, events, setVisibleModal, toggleEventSelected, selectedEvents}) => {

  let eventButtons = [];
  console.log(selectedEvents);
  const handleEventButtonClick = (event) => {
    if (selectedEvents.includes(event)) {
      toggleEventSelected(event);
    } else {
      setVisibleModal(event);
    }
  }

  console.log('overbought' in selectedEvents);

  for (let i=0; i < events.length; i += 2) {
    eventButtons.push(
      <Row>
        <div className={styles.EventButtonWrapper}>
          <EventButton selected={selectedEvents.includes(events[i].id)} onClick={() => handleEventButtonClick(events[i].id)} onEdit={() => setVisibleModal(events[i].id)}>{events[i].name}</EventButton>
        </div>
        <div className={styles.EventButtonWrapper}>
          {i + 1 < events.length && <EventButton selected={selectedEvents.includes(events[i + 1].id)} onClick={() => handleEventButtonClick(events[i + 1].id)} onEdit={() => setVisibleModal(events[i + 1].id)}>{events[i + 1].name}</EventButton>}
        </div>
      </Row>)
  }

  console.log(eventButtons);

  return (
    <div className={styles.EventsStep}>
      <div className={styles.ButtonsSection}>
        {eventButtons}
      </div>
      
      <StepNextButton onClick={() => {
        nextStep();
        setCompleted(true);
      }} style={{position: "absolute", bottom: "127px"}} disabled={selectedEvents.length === 0}/>
    </div>
  );
};

EventsStep.propTypes = {};

EventsStep.defaultProps = {};

export default EventsStep;
