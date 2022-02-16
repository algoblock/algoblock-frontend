import React from 'react';
import PropTypes from 'prop-types';
import {StepNextButton, EventButton, Row} from '../../';
import styles from './EventsStep.module.scss';

const EventsStep = ({nextStep, setCompleted, events}) => {

  let eventButtons = [];

  for (let i=0; i < events.length; i += 2) {
    eventButtons.push(<Row>
        <div className={styles.EventButtonWrapper}>
          <EventButton>{events[i].name}</EventButton>
        </div>
        <div className={styles.EventButtonWrapper}>
          {i + 1 < events.length && <EventButton>{events[i + 1].name}</EventButton>}
        </div>
      </Row>)
  }

  return (
    <div className={styles.EventsStep}>
      <div className={styles.ButtonsSection}>
        {eventButtons}
      </div>
      
      <StepNextButton onClick={() => {
        nextStep();
        setCompleted(true);
      }} style={{position: "absolute", bottom: "127px"}} disabled={false}/>
    </div>
  );
};

EventsStep.propTypes = {};

EventsStep.defaultProps = {};

export default EventsStep;
