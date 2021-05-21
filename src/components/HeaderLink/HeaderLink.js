import React from 'react';
import PropTypes from 'prop-types';
import {Link} from '../';
import styles from './HeaderLink.module.scss';

const HeaderLink = (props) => (
	<Link className={styles.NoUnderline}>
		<div className={styles.HeaderLink}>
			{props.children}
		</div>
	</Link>
);

HeaderLink.propTypes = {};

HeaderLink.defaultProps = {};

export default HeaderLink;
