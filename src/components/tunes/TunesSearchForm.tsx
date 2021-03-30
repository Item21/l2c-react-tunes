import React, { useRef, ChangeEvent, FormEvent } from 'react'
import { debounce } from 'lodash-es'

import styles from './TunesSearchForm.module.scss'

interface Props {
	onSearch: (query: string) => void
}

const TunesSearchForm = (props: Props) => {
	const searchInput = useRef<HTMLInputElement>(null)

	const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
		searchForMusic()
	}, 500)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchForMusic()
	}

	const searchForMusic = () => {
		let sString = searchInput.current?.value
		if (sString) props.onSearch(sString)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				autoFocus
				type="text"
				ref={searchInput}
				onChange={handleInput}
				className={styles.search}
			/>
		</form>
	)
}

export default TunesSearchForm
