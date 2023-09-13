import React from 'react';

function GuessInput({ setGuesses, guesses }) {
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
    if (guesses.length >= 6) {
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
