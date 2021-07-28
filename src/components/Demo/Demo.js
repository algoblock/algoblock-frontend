import React from 'react';
import PropTypes from 'prop-types';
import {LandingTitle, Row, Column, BigButton, Link} from '../';
import styles from './Demo.module.scss';
import {PlaceholderPng} from '../../img';

const Demo = () => (
  <div className={styles.Demo}>
    <LandingTitle>
      Try it out Risk-Free
    </LandingTitle>
    <div className={styles.Row}>
      <Row style={{justifyContent: "center"}}>
        <Column>
          <img src={PlaceholderPng} width={817}/>
        </Column>
        <div className={styles.RowSpacer}/>
        <Column>
          <div className={styles.Title}>
            Build and Test your strategies
            before you deploy them!
          </div>
          <br/>
          <div className={styles.Body}>
            Back testing allows your algorithm to run and produce results based on historical data, allowing you to try out all of your ideas without having to spend a dime!
          </div>
          <br/>
          <Link to="/signup">
            <BigButton>
              Demo
            </BigButton>
          </Link>
        </Column>
      </Row>
    </div>
  </div>
);

Demo.propTypes = {};

Demo.defaultProps = {};

export default Demo;
