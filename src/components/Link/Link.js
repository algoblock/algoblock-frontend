import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import styles from './Link.module.scss';

const Link = (props) => (
  <RouterLink style={props.style} to={props.to} className={styles.Link}>
    {props.children}
  </RouterLink>
);

Link.propTypes = {};

Link.defaultProps = {};

export default Link;
