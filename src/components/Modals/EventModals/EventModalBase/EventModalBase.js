import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './EventModalBase.module.scss';
import colors from '../../../../utilities/_export.module.scss';

const EventModalBase = ({darkMode, visibleModal, setVisibleModal, eventId, eventName, children}) => {
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "566px",
      boxSizing: "border-box",
      color: darkMode ? colors.white : colors.dark,
      backgroundColor: darkMode ? colors.dark : colors.white,
      border: `2px solid ${darkMode ? colors.white : colors.dark}`,
      borderRadius: "20px",
      overflow: "hidden",
    },
    overlay: {
      zIndex: 1,
      backgroundColor: darkMode ? "rgb(24, 24, 24, 0.75)" : "rgb(255, 255, 255, 0.75)",
    }
  };
  return (
    <Modal
        isOpen={visibleModal === eventId}
        onRequestClose={() => setVisibleModal("")}
        style={modalStyles}
        contentLabel={`${eventName} Modal`}
      >
        {children}
        

      </Modal>
  );
};

EventModalBase.propTypes = {};

EventModalBase.defaultProps = {};

export default EventModalBase;
