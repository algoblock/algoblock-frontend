import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = (props) => (
  <div className={styles.Card}>
    {props.children}
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
