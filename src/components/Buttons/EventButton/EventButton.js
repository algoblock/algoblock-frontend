import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventButton.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import colors from '../../../utilities/_export.module.scss';


const EventButton = ({selected, children, onClick, onEdit}) => {

  const edit = (e) => {
    e.stopPropagation();
    onEdit();
  }

  return (
    <div className={`${styles.EventButton} ${selected ? styles.Selected : ""}`} onClick={onClick || undefined}>
      {children}
      {selected && <EditIcon sx={{fontSize: 20, color: colors.dark}} onClick={edit} className={styles.EditButton}/>}
    </div>
  );
};

EventButton.propTypes = {};

EventButton.defaultProps = {};

export default EventButton;
