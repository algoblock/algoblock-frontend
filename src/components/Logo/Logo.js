import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import {AlgocubeSvg, AlgocubeDarkmodeSvg} from '../../img';

const Logo = (props) => (
  <img className={styles.Logo} src={props.darkMode ? AlgocubeDarkmodeSvg : AlgocubeSvg} width={120}/>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
