import React from 'react'

import styles from './TunesList.module.scss'
import { Song } from '../../types/index'
import TunesSong from './TunesSong'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface Props {
	songs: Song[]
}

const TunesList = (props: Props) => {
	const { songs } = props
	return (
		<TransitionGroup component="ul" className={styles.tunesList}>
			{songs.map((song) => (
				<CSSTransition key={song.id} timeout={500} classNames="song">
					<li key={song.id}>
						<TunesSong newSong={song} />
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default TunesList
