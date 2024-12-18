import React, { useState } from 'react';

function GuessInput({ updateGuessList }) {
	const [text, setText] = useState('');
	const charLimit = 5;

	function createGuess(guessed) {
		return { id: crypto.randomUUID(), guess: guessed };
	}

	return (
		<form
			className='guess-input-wrapper'
			onSubmit={(event) => {
				event.preventDefault();
				console.log(text);
				updateGuessList(createGuess(text));
				setText('');
			}}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				pattern={'[a-zA-Z]{5}'}
				maxLength={charLimit}
				minLength={charLimit}
				required
				title='5 letter word'
				value={text}
				onChange={(event) => {
					setText(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
