import React from 'react';
import PropTypes from 'prop-types';

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value)}
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          onClick={evt => {
            evt.preventDefault();
            setCurrentGuess('');
          }}
          className="btn btn-promary mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
