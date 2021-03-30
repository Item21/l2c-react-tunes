import React, { useState } from 'react'

import logo from '../assets/logo.svg'
import styles from './Home.module.scss'

const Home = () => {
	const [title] = useState('React, whee!!')

	return (
		<div className={styles.home}>
			<img className={styles.logo} src={logo} alt="react logo" />

			<h1>{title}</h1>

			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
	)
}

export default Home
