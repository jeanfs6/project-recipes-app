import React, { useState } from 'react';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const SavedRecipes = ({ index, favorite }) => {
  const [isURLcopied, setCopiedURL] = useState(false);
  const getCategory = () => {
    if (favorite.type === 'food') {
      return `${favorite.nationality} - ${favorite.category}`;
    }
    return favorite.alcoholicOrNot;
  };
  const renderTags = () => (
    <ul>
      {favorite.tags.map((tag, i) => (
        <li key={ i } data-testid={ `0-${tag}-horizontal-tag` }>{tag}</li>
      )) }

    </ul>);
  const linkToClipboard = () => {
    const url = `http://localhost:3000/foods/${favorite.id}`;
    navigator.clipboard.writeText(url);
    setCopiedURL(true);
  };
  return (
    <div>
      <img
        alt={ favorite.name }
        src={ favorite.image }
        data-testid={ `${index}-horizontal-image` }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        { getCategory() }
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{ favorite.name }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{favorite.doneDate }</p>
      <button
        type="button"
        onClick={ () => linkToClipboard() }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share"
          className="share-icon"
        />
        { isURLcopied && <p>Link copied!</p> }
      </button>
      { favorite.type === 'food' ? renderTags() : null }

    </div>
  );
};
SavedRecipes.propTypes = {
  favorite: propTypes.instanceOf(Object),
  index: propTypes.number,
}.isRequired;

export default SavedRecipes;
