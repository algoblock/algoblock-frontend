import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import {HeaderLink} from '../';
import { UserContext } from '../../providers/UserProvider';
import styles from './LinkBar.module.scss';

const LinkBar = (props) => {
	var links = [];
  const user = useContext(UserContext);
	
	if (!user) {
		var linkTitles = ["Price", "Learn", "Company", "Community"];
	} else {
		var linkTitles = ["Dashboard", "Editor", "Community"];
	}
	for (var i=0; i < linkTitles.length - 1; i++) {
		links.push(<HeaderLink to={`/${linkTitles[i].toLowerCase()}`} key={2 * i} selected={linkTitles[i] == props.selected}>{linkTitles[i]}</HeaderLink>);
		links.push(<div key={2 * i + 1} className={styles.LinkWrapper}/>);
	}
	var i = linkTitles.length - 1;
	links.push(<HeaderLink to={`/${linkTitles[i].toLowerCase()}`} key={2 * i} selected={linkTitles[i] == props.selected}>{linkTitles[i]}</HeaderLink>);
	return (
		<div className={styles.LinkBar}>
			{links}
		</div>
	);
};

LinkBar.propTypes = {};

LinkBar.defaultProps = {};

export default LinkBar;
