import React from 'react';
import propTypes from 'prop-types';
import YoutubeIcon from '../images/youtube.svg';

const RecipeCard = (
  { strMeal,
    strCategory,
    strArea,
    strMealThumb,
    strTags,
    strYoutube,
    index,
  },
) => (
  <div className="l-recipeCard" data-testid={ `${index}-recipe-card` }>
    <div className="l-recipeCard__image">
      <img
        src={ strMealThumb }
        alt={ strMeal }
        width="140px"
        data-testid={ `${index}-card-img` }
      />
    </div>
    <div className="l-recipeCard__infos">
      <h1 className="c-name" data-testid={ `${index}-card-name` }>{strMeal}</h1>
      <p className="c-category">{strCategory}</p>
      <p className="c-area">{strArea}</p>
      <div>
        <p className="c-tags">{strTags}</p>
      </div>
      <a href={ strYoutube } target="_blank" rel="noopener noreferrer">
        <img src={ YoutubeIcon } alt="Youtube" width="40px" />
      </a>
    </div>
  </div>
);

RecipeCard.propTypes = {
  strMeal: propTypes.string,
  strCategory: propTypes.string,
  strArea: propTypes.string,
  strMealThumb: propTypes.string,
  strTags: propTypes.string,
  strYoutube: propTypes.string,
}.isRequired;

export default RecipeCard;
