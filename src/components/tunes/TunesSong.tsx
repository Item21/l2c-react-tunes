import React from 'react'

import './TunesSong.scss'
import { Song } from '../../types/index'
import { truncate } from 'lodash-es'

interface Props {
	newSong: Song
}

const TunesSong = (props: Props) => {
	const { newSong } = props

	const shorten = (str: string, len: number = 55): string => {
		return truncate(str, { length: len })
	}

	const shortSong = (song: Song): string => {
		return shorten(song.artist + ' - ' + song.title, 100)
	}

	return (
		<article className="song">
			<div className="inside">
				<h2>{shortSong(newSong)}</h2>
				<div className="player">
					{newSong.artwork && (
						<img src={newSong.artwork} alt="album art" />
					)}
					<audio controls src={newSong.audioFile} />
				</div>
			</div>
			<footer className="meta">{newSong.album}</footer>
		</article>
	)
}

export default TunesSong
