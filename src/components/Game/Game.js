import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessedDisplay from '../GuessedDisplay/GuessedDisplay';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameWon from '../GameWon/GameWon';
import GameLost from '../GameLost/GameLost';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState('running');

	function updateGuessList(newGuess) {
		const nextGuesses = [...guesses, newGuess];
		setGuesses(nextGuesses);

		if (newGuess === answer) {
			setGameStatus('won');
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}
	return (
		<>
			<GuessedDisplay guesses={guesses} answer={answer} />
			{gameStatus === 'running' && (
				<GuessInput updateGuessList={updateGuessList} />
			)}
			{gameStatus === 'won' && <GameWon guessesNum={guesses.length} />}
			{gameStatus === 'lost' && <GameLost answer={answer} />}
		</>
	);
}

export default Game;
