import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import {AlgoblockNoOverlapSvg} from '../../img';

const Logo = () => (
  <img className={styles.Logo} src={AlgoblockNoOverlapSvg} width={120}/>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
