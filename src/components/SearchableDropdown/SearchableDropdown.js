import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import styles from './SearchableDropdown.module.scss';
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";



const SearchableDropdown = ({choices, text, setText}) => {
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
  return (
    <div className={styles.SearchableDropdown} onFocus={() => setFocused(true)} onBlur={handleBlur}>
      <input className={styles.Input} value={text} onChange={(e) => {
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
        <SimpleBarReact autoHide={false} style={{ maxHeight: 160 }}>
          {filtered.map((item) => (<div onClick={(e) => {
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