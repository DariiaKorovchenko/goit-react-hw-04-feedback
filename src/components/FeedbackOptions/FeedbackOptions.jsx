import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonList = options.map(element => {
    return (
      <li key={element}>
        <button
          id={element}
          className={css.control_button}
          type="button"
          onClick={onLeaveFeedback}
        >
          {element}
        </button>
      </li>
    );
  });
  return <ul className={css.button_list}>{buttonList}</ul>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
