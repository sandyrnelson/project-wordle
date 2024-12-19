import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessedDisplay from '../GuessedDisplay/GuessedDisplay';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
  function updateGuessList(newGuess) {
    setGuesses([...guesses, newGuess])
  } 
	return (
		<>
			<GuessedDisplay guesses={guesses} answer={answer} />
			<GuessInput updateGuessList={updateGuessList} />
		</>
	);
}

export default Game;
