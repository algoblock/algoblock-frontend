import React from 'react';
import PropTypes from 'prop-types';
import {MessageButton} from '../';
import styles from './TeamMember.module.scss';

const TeamMember = ({name, active, style, darkMode}) => {
  const initials = name.split(' ').map(word => word[0]).join('');
  return (
    <div className={styles.Row} style={style}>
      <div className={styles.ProfileIcon}>
        {initials}
        {active && <div className={styles.Active}/>}
      </div>
      <div className={`${styles.Name} ${darkMode ? styles.Dark : null}`}>{name}</div>
      <MessageButton style={{position: "absolute", right: "0px"}}/>
    </div>
  );
};

TeamMember.propTypes = {};

TeamMember.defaultProps = {};

export default TeamMember;
