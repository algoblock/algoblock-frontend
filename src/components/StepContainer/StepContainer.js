import React from 'react';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import {Row} from '../';
import lightModeStyles from './StepContainer.module.scss';
import darkModeStyles from './StepContainerDark.module.scss';
import { Context } from '../../App';

const StepContainer = (props) => {
  const {state} = useContext(Context);
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  return (
    <div className={styles.StepContainer}>
      <Row style={{alignItems: "center"}}>
        <div className={styles.Number}>{props.number}</div>
        <div className={styles.Title}>{props.title}</div>
      </Row>
      {props.children}
    </div>
  );
};

StepContainer.propTypes = {};

StepContainer.defaultProps = {};

export default StepContainer;
