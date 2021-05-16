import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../';
import styles from './BigButton.module.scss';

const BigButton = (props) => (
  <div className={styles.BigButton}>
    <Button text={props.text} padding="22px 18px 22px 18px"/>
  </div>
);

BigButton.propTypes = {};

BigButton.defaultProps = {};

export default BigButton;
