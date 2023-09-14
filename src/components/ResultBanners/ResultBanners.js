import React from 'react';

function ResultBanners({ isWinner, isLoser, attemps = 3 }) {
  return (
    <>
      {isWinner && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {attemps} guesses</strong>.
          </p>
        </div>
      )}
      {isLoser && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default ResultBanners;
