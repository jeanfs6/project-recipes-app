import React, { useContext } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MeuContextoInterno } from '../../context/index';
import YoutubeIcon from '../../images/youtube.svg';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import '../../component/recipeCard.css';

const arrayIndex = ['recipe1', 'recipe2', 'recipe3', 'recipe4', 'recipe5', 'recipe6'];

const Food = () => {
  // const { state } = useLocation();
  const { id: urlId } = useParams();
  const {
    recipes: { foods },
  } = useContext(MeuContextoInterno);
  const state = foods.find(({ idMeal }) => idMeal === urlId);
  const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = state;
  const filterIgredients = (recipe) => {
    const TWENTY = 20;
    const ingredientList = [];

    for (let i = 1; i <= TWENTY; i += 1) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (recipe[ingredientKey] !== '' && recipe[measureKey] !== '') {
        const ingredient = `${recipe[ingredientKey]}: ${recipe[measureKey]}`;
        ingredientList.push(ingredient);
      }
    }

    return ingredientList;
  };
  return (
    <div>
      { state && (
        <div>
          <h1 data-testid="recipe-title" className="l-food"> Food </h1>
          <img
            className="card-img card-img-mine"
            data-testid="recipe-photo"
            src={ strMealThumb }
            alt={ strMeal }
          />
          <button
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="Share" className="share-icon" />
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            <img src={ whiteHeartIcon } alt="Favorite" className="favorite-icon" />
          </button>
          <p data-testid="recipe-category">{strCategory}</p>
          <ol>
            {filterIgredients(state).map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { ingredient }
              </li>
            ))}

          </ol>

          <p data-testid="instructions">{strInstructions}</p>
          <a
            data-testid="video"
            href={ strYoutube }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ YoutubeIcon } alt="Youtube" className="youtube-icon" />
          </a>
          {/* <div data-testid="1-recomendation-card">
        <recipeCard />
      </div>
      <div data-testid="2-recomendation-card">
        <recipeCard />

      </div> */}
          {arrayIndex.map((item, index) => (
            <h3 key={ index } data-testid={ `${index}-recomendation-title` }>{item}</h3>
          ))}

          <button
            type="button"
            data-testid="start-recipe-btn"
          >
            Start
          </button>

        </div>
      )}
    </div>
  );
};

export default Food;
