import React from 'react';

function GuessInput() {
  const [word, setWord] = React.useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value.toUpperCase();
    setWord(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.length !== 5) {
      alert('Please enter a 5-letter word');
      return;
    }
    console.log('guess:', word);
    setWord('');
  };

  return (
    <div>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          value={word}
          onChange={handleInputChange}
          minLength={0}
          maxLength={5}
        />
      </form>
    </div>
  );
}

export default GuessInput;
