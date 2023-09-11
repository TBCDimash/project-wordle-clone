import React, { useState } from 'react';

function GuessInput() {
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 5) {
      const newGuess = value;
      setCurrentGuess(newGuess);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== 5) {
      alert('Please enter a 5-letter word');
      return;
    }
    if (guesses.length > 5) {
      alert('You have Reached Maximum Attempts');
      setGuesses([]);
      return;
    }
    setGuesses([...guesses, currentGuess]);
    console.log(currentGuess);
    setCurrentGuess('');
  };

  return (
    <div>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          value={currentGuess}
          onChange={handleInputChange}
          minLength={0}
          maxLength={5}
        />
      </form>
    </div>
  );
}

export default GuessInput;
