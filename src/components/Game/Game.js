import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import ResultBanners from '../ResultBanners/ResultBanners';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const isWinner = guesses.some((guess) => guess === answer);
  const isLoser = guesses.length === 6 && !isWinner;
  const isGameOver = isWinner || isLoser;
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        setGuesses={setGuesses}
        guesses={guesses}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <ResultBanners
          isWinner={isWinner}
          isLoser={isLoser}
          attemps={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
