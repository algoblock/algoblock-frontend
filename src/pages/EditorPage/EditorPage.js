import React from 'react';
import PropTypes from 'prop-types';
import {Header, VerticalStepper} from '../../components';
import styles from './EditorPage.module.scss';

const EditorPage = (props) => {
  return (
    <div className={styles.EditorPage}>
      <Header selected={"Editor"} loggedIn={true}/>
      <VerticalStepper selected={"Symbols"}/>
    </div>
  );
};

EditorPage.propTypes = {};

EditorPage.defaultProps = {};

export default EditorPage;
