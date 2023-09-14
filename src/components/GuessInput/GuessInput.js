import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ setGuesses, isGameOver, guesses }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleInputChange = (e) => {
    const newGuess = e.target.value.toUpperCase();
    setCurrentGuess(newGuess);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGuesses([]);
      return;
    }
    setGuesses([...guesses, currentGuess]);
    console.log(currentGuess);
    setCurrentGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={currentGuess}
        onChange={handleInputChange}
        disabled={isGameOver}
        minLength={5}
        pattern='[a-zA-Z]{5}'
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
