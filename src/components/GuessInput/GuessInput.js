import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ setGuesses, isGameOver, guesses }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 5) {
      const newGuess = value;
      setCurrentGuess(newGuess);
    }
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
        minLength={0}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
