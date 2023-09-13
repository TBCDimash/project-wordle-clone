import React from 'react';
import { NUM_OF_CELLS_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
function Guess({ guess, answer }) {
  const checkedGuess = guess ? checkGuess(guess, answer) : [];
  const missingLetters = range(checkedGuess.length, NUM_OF_CELLS_ALLOWED).fill({
    letter: '',
    status: guess ? 'incorrect' : '',
  });
  const guessLetters = [...checkedGuess, ...missingLetters];
  return (
    <p className='guess'>
      {guessLetters.map(({ letter, status }, index) => (
        <span key={`${index}-${letter}`} className={`${status} cell`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
