import React from 'react';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import lightModeStyles from './SearchableDropdown.module.scss';
import darkModeStyles from './SearchableDropdownDark.module.scss';
import { Context } from '../../App';
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";



const SearchableDropdown = ({choices, text, setText, style}) => {
  const {state} = useContext(Context);
  let styles = state.darkMode ? darkModeStyles : lightModeStyles;
  
  let filtered = [];
  const handleBlur = (e) => {
    if (e.relatedTarget && e.relatedTarget.className === "simplebar-content-wrapper") {
      return;
    }
    setFocused(false);
  }

  if (choices) {
    for (let choice of choices) {
      if (choice.startsWith(text.toUpperCase())) {
        filtered.push(choice);
      }
    }
  }
  let first = filtered.length > 0 ? filtered[0].slice(text.length) : "";

  let [focused, setFocused] = useState(false);
  let width = style ? style.width : null;
  return (
    <div style={style} className={styles.SearchableDropdown} onFocus={() => setFocused(true)} onBlur={handleBlur}>
      <input style={{width: width}} className={styles.Input} value={text} onChange={(e) => {
        if (filtered.length === 0) {
          setText(e.target.value.toUpperCase());
          return;
        }
        for (let choice of filtered) {
          if (choice.startsWith(e.target.value.toUpperCase())) {
            setText(e.target.value.toUpperCase());
            break;
          }
        }
      }} type="text"/>
      <div className={styles.Text}>
        <span className={styles.UserInput}>{text}</span>
        <span className={styles.AutoComplete}>{first}</span>
      </div>
      {focused && 
        <SimpleBarReact autoHide={false} style={{ maxHeight: 160, position: "absolute", top: "65px", left: "0px", width: "100%" }}>
          {filtered.map((item) => (<div style={{width: width}} onClick={(e) => {
            setText(item);
            setFocused(false);
          }} className={styles.Choice}>{item}</div>))}
        </SimpleBarReact>
      }
    </div>
  );
};

SearchableDropdown.propTypes = {};

SearchableDropdown.defaultProps = {};

export default SearchableDropdown;
