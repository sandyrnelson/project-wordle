import React from 'react';
import { WORD_LENGTH_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessedSlot({ word }) {

	return range(WORD_LENGTH_ALLOWED).map((letterIndex) => (
		<span key={letterIndex} className='cell'>
			{word ? word.guess.charAt(letterIndex) : ''}
		</span>
	));
}

export default GuessedSlot;
