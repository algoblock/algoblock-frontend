import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = (props) => {
  let className = `${styles.Card} ${props.className}`;
  className += props.topLeft ? ` ${styles.TopLeft}` : "";
  className += props.topRight ? ` ${styles.TopRight}` : "";
  className += props.bottomLeft ? ` ${styles.BottomLeft}` : "";
  className += props.bottomRight ? ` ${styles.BottomRight}` : "";
  return (
    <div className={className}>
      {props.children}
    </div>
  )
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
