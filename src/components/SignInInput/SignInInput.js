import React from 'react';
import {useState, useRef} from 'react';
import styles from './SignInInput.module.scss';

const SignInInput = (props) => {
	const [value, setValue] = useState('');
	const inputRef = useRef();
  function onChange(value) {
    setValue(value);
    props.setvalue(value);
  }

  return (
		<div className={styles.Wrapper} onClick={() => {inputRef.current.focus()}}>
			<input type={props.type} ref={inputRef} onChange={event => onChange(event.target.value)} spellCheck="false" className={`${styles.SignInInput} ${value.length ? styles.Active : ''}`}/>
			<span className={styles.Label}>{props.placeholder}</span>
		</div>
	)
};

SignInInput.propTypes = {};

SignInInput.defaultProps = {};

export default SignInInput;
