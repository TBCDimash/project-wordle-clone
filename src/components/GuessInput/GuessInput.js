import React, { useState } from 'react';

function GuessInput() {
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 5) {
      setCurrentGuess(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== 5) {
      alert('Please enter a 5-letter word');
      return;
    }
    if (guesses.length >= 5) {
      alert('You have reached the maximum number of attempts');
      return;
    }
    setGuesses([...guesses, currentGuess]);
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
        <button type='submit'>Submit</button>
      </form>
      <div>
        <h3>Your Guesses:</h3>
        <ul>
          {guesses.map((guess, index) => (
            <li key={index}>{guess}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GuessInput;
