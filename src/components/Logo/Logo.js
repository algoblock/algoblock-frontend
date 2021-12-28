import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import {AlgoblockNoOverlapSvg, AlgoblockNoOverlapDarkmodeSvg} from '../../img';

const Logo = (props) => (
  <img className={styles.Logo} src={props.darkMode ? AlgoblockNoOverlapDarkmodeSvg : AlgoblockNoOverlapSvg} width={120}/>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
