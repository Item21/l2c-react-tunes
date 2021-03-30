import React, { useState } from 'react'
import axios from 'axios'

import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'
import { SongsFromItunes } from '../types/index'
import { Song } from '../types/index'

const Tunes = () => {
	const [songs, setSongs] = useState([])

	const handleSearch = (data: string) => {
		axios
			.get(
				`https://itunes.apple.com/search
				?term=${encodeURI(data)}
				&entity=musicTrack
				&limit=5`,
			)
			.then((response) => {
				let tunesSongs = response.data.results
					.filter((song: SongsFromItunes) => song.kind === 'song')
					.map((song: SongsFromItunes) => extracData(song))

				setSongs(tunesSongs)
			})
	}

	const extracData = ({
		trackId: id,
		artistName: artist,
		previewUrl: audioFile,
		artworkUrl100: artwork,
		trackName: title,
		collectionName: album,
	}: SongsFromItunes) => {
		return { id, artist, audioFile, artwork, title, album } as Song
	}

	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm onSearch={handleSearch} />
			<TunesList songs={songs} />
		</article>
	)
}

export default Tunes
