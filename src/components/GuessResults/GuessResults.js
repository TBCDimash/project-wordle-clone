import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
function GuessResults({ guesses: inputGesuss, answer }) {
  const guesses = [
    ...inputGesuss,
    ...range(inputGesuss.length, NUM_OF_GUESSES_ALLOWED).fill(''),
  ];
  return (
    <div className='guess-results'>
      {guesses.map((guess, index) => (
        <Guess answer={answer} key={`${index} - ${guess}`} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
