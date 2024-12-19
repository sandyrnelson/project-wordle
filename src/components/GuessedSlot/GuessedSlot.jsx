import React from 'react';
import { WORD_LENGTH_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
	const customClass = status ? `cell ${status}` : 'cell';
	return <span className={customClass}>{letter}</span>;
}

function GuessedSlot({ word, answer }) {
	let letters = checkGuess(word, answer);

	return range(WORD_LENGTH_ALLOWED).map((letterIndex) => (
		<Cell
			key={letterIndex}
			letter={letters ? letters[letterIndex].letter : undefined}
			status={letters ? letters[letterIndex].status : undefined}
		/>
	));
}

export default GuessedSlot;
