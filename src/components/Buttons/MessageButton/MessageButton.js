import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageButton.module.scss';

const MessageButton = ({onClick, style}) => {
  return (
    <div style={style} onClick={onClick || undefined} className={styles.MessageButton}>
      Message
    </div>
  );
};

MessageButton.propTypes = {};

MessageButton.defaultProps = {};

export default MessageButton;
