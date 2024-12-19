import React from 'react';
import Banner from '../Banner/Banner';

function GameWon({ guessesNum }) {
	return (
		<Banner status='happy'>
			<p>
				<strong>Congratulations!</strong> Got it in
				{guessesNum === 1 && <strong> 1 guess</strong>}
				{guessesNum > 1 && <strong>{guessesNum} guesses</strong>}.
			</p>
		</Banner>
	);
}

export default GameWon;
