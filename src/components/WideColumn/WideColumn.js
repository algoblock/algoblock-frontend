import React from 'react';
import PropTypes from 'prop-types';
import {Column} from '../';
import styles from './WideColumn.module.scss';

const WideColumn = (props) => (
  <Column alignItems={props.alignItems} style={{width: "100%"}}>
    {props.children}
  </Column>
);

WideColumn.propTypes = {};

WideColumn.defaultProps = {};

export default WideColumn;
