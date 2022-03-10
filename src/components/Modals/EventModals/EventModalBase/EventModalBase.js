import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {Row, InvertedButton, Button} from '../../../';
import styles from './EventModalBase.module.scss';
import commonStyles from '../EventModals.module.scss';
import colors from '../../../../utilities/_export.module.scss';

const EventModalBase = ({darkMode, visibleModal, setVisibleModal, eventId, eventName, children, cancelEvent, confirmEvent, selected}) => {
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
      zIndex: 2,
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
        <div className={commonStyles.ModalTitle}>{eventName}</div>
        <div className={commonStyles.ModalContent}>
          {children}
        </div>
        <Row style={{width: "100%", justifyContent: "center", marginTop: "24px"}}>
          {!selected && <InvertedButton cancel onClick={() => cancelEvent(eventId)}>Cancel</InvertedButton>}
          <Button darkBg onClick={() => confirmEvent(eventId)}>Confirm</Button>
        </Row>
        

      </Modal>
  );
};

EventModalBase.propTypes = {};

EventModalBase.defaultProps = {};

export default EventModalBase;
