import React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../../App';
import PropTypes from 'prop-types';
import {Header, VerticalStepper, Row, SymbolsStep, StepContainer} from '../../components';
import lightModeStyles from './EditorPage.module.scss';
import darkModeStyles from './EditorPageDark.module.scss';

const EditorPage = (props) => {
  const {state} = useContext(Context);
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  let step = <SymbolsStep/>;

  return (
    <div className={styles.EditorPage}>
      <Header selected={"Editor"} loggedIn={true}/>
      <Row style={{marginTop: "5vh", justifyContent: "center", alignItems: "center"}}>
        <VerticalStepper selected={"Event"} currentCompleted={false}/>
        <StepContainer title="Symbols" number="1">
          {step}
        </StepContainer>
      </Row>
    </div>
  );
};

EditorPage.propTypes = {};

EditorPage.defaultProps = {};

export default EditorPage;
