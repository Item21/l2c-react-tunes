import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './TheNavigation.module.scss'

interface Props {}

const TheNavigation = (props: Props) => {
	return (
		<div>
			<nav className={styles.navigation}>
				<NavLink to="/" activeClassName={styles.active} exact>
					Home
				</NavLink>
				<NavLink to="/tunes" activeClassName={styles.active}>
					Tunes
				</NavLink>
				<NavLink to="/about" activeClassName={styles.active}>
					About
				</NavLink>
			</nav>
		</div>
	)
}

export default TheNavigation
