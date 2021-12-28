import React from 'react';
import {useState} from 'react';

import PropTypes from 'prop-types';
import {Divider} from '../';
import {useScrollPosition} from '../../utilities/useScrollPosition';

import styles from './ScrollingDivider.module.scss';

const ScrollingDivider = () => {
	const [opacity, setOpacity] = useState(0);

	useScrollPosition(({ prevPos, currPos }) => {
	  const newOpacity = Math.min(-currPos.y / 100.0, 1);
	  if (newOpacity !== opacity) {
	  	setOpacity(newOpacity);
	  }
	}, [opacity])

	return (
		<div style={{opacity: opacity}}>
	  	<Divider/>
	  </div>
	);
}

ScrollingDivider.propTypes = {};

ScrollingDivider.defaultProps = {};

export default ScrollingDivider;
