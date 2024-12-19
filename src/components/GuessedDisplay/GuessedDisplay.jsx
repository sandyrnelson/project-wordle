import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { range } from '../../utils';
import GuessedSlot from '../GuessedSlot/GuessedSlot';

function GuessedDisplay({ guesses, answer }) {
	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((wordIndex) => (
				<p key={wordIndex} className='guess'>
					<GuessedSlot answer={answer} word={guesses[wordIndex]} />
				</p>
			))}
		</div>
	);
}

export default GuessedDisplay;
