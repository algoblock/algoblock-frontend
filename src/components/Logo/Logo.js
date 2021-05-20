import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import {AlgoblockSvg} from '../../img';

const Logo = () => (
  <img className={styles.Logo} src={AlgoblockSvg} width={120}/>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
