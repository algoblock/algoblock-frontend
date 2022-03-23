import React from 'react';
import PropTypes from 'prop-types';
import {BottomCubePng, MiddleCubePng, TopCubePng} from '../../img';
import styles from './LoadingAnimation.module.scss';

const LoadingAnimation = (props) => {
  return (
    <div className={styles.LoadingAnimation}>
      <img className={`${styles.ImageBottom} ${styles.Image}`} src={BottomCubePng}/>
      <img className={`${styles.ImageMiddle} ${styles.Image}`} src={MiddleCubePng}/>
      <img className={`${styles.ImageTop} ${styles.Image}`} src={TopCubePng}/>
      
      <div className={styles.LoadingText}>{props.text}</div>
      
    </div>
  );
};

LoadingAnimation.propTypes = {};

LoadingAnimation.defaultProps = {};

export default LoadingAnimation;
