import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventButton.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import colors from '../../../utilities/_export.module.scss';


const EventButton = ({selected, children, onClick, onEdit, small}) => {
  let className = `${styles.EventButton}`;
  className += small ? ` ${styles.Small}` : "";
  const edit = (e) => {
    e.stopPropagation();
    onEdit();
  }

  return (
    <div className={`${className} ${selected ? styles.Selected : ""}`} onClick={onClick || undefined}>
      {children}
      {selected && <EditIcon sx={{fontSize: small ? "18px" : "20px", color: colors.dark}} onClick={edit} className={styles.EditButton}/>}
    </div>
  );
};

EventButton.propTypes = {};

EventButton.defaultProps = {};

export default EventButton;
