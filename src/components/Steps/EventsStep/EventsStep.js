import React from 'react';
import PropTypes from 'prop-types';
import {StepNextButton} from '../../';
import styles from './EventsStep.module.scss';

const EventsStep = ({nextStep, setCompleted}) => {

  return (
    <div className={styles.EventsStep}>
      
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
