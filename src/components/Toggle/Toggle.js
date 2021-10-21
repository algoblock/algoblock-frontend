import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toggle.module.scss';

const Toggle = (props) => {
  let toggleClass = styles.Toggle;
  toggleClass += props.active ? ` ${styles.ToggleActive}` : "";
  let circleClass = styles.Circle;
  circleClass += props.active ? ` ${styles.CircleActive}` : "";
  return (
    <div onClick={props.onClick} className={toggleClass}>
      <div className={circleClass}/>
    </div>
  );
};

Toggle.propTypes = {};

Toggle.defaultProps = {};

export default Toggle;
