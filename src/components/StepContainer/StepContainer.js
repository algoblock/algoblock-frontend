import React from 'react';
import PropTypes from 'prop-types';
import {Row} from '../';
import styles from './StepContainer.module.scss';

const StepContainer = (props) => {
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
