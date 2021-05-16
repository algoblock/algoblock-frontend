import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '../';
import styles from './HeaderLink.module.scss';

const HeaderLink = (props) => (
  <div className={styles.HeaderLink}>
    <Link text={props.text}/>
  </div>
);

HeaderLink.propTypes = {};

HeaderLink.defaultProps = {};

export default HeaderLink;
