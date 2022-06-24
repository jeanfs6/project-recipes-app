import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import YoutubeIcon from '../../images/youtube.svg';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import '../../component/recipeCard.css';
import './food&drink.css';
import Gallery from '../../component/Gallery';
import { MeuContextoInterno } from '../../context';
import * as localApi from '../../helpers/localApi/index';

const Food = () => {
  const { id: urlId } = useParams();

  const [recipeDetails, setRecipeDetails] = useState({});
  const [statistics, setStatistics] = useState({});

  const {
    idMeal,
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
  } = recipeDetails;
  const {
    recipes: { drinks },
  } = useContext(MeuContextoInterno);

  const SIX = 6;
  const recomendation = drinks.slice(0, SIX);
  useEffect(() => {
    const getRecipe = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${urlId}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
    };
    getRecipe();
    const getLocalStorage = () => {
      const doneRecipes = localApi.getLocalKey('doneRecipes');
      const favoriteRecipes = localApi.getLocalKey('favoriteRecipes');
      const inProgressRecipes = localApi.getLocalKey('inProgressRecipes');
      if ((doneRecipes && favoriteRecipes && inProgressRecipes) === null) {
        return;
      }
      const done = doneRecipes.some(({ id }) => id === urlId);
      const favorite = favoriteRecipes.some(({ id }) => id === urlId);
      console.log(favorite);
      const progress = inProgressRecipes.some(
        ({ meals: { id } }) => id === urlId,
      );
      setStatistics({ done, favorite, progress });
    };
    getLocalStorage();
  }, [urlId]);

  // const setInProgress = () => {

  // }

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
      <h1 data-testid="recipe-title" className="l-food">
        {strMeal}
      </h1>

      <img
        className="card-img card-img-mine"
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
      />

      <button type="button" data-testid="share-btn">
        <img src={ shareIcon } alt="Share" className="share-icon" />
      </button>

      <button type="button" data-testid="favorite-btn">
        <img src={ whiteHeartIcon } alt="Favorite" className="favorite-icon" />
      </button>

      <p data-testid="recipe-category">{strCategory}</p>

      <ul>
        {filterIgredients(recipeDetails).map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {ingredient}
          </li>
        ))}
      </ul>

      <p data-testid="instructions">{strInstructions}</p>

      <a
        data-testid="video"
        href={ strYoutube }
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ YoutubeIcon } alt="Youtube" className="youtube-icon" />
      </a>

      <Gallery recipes={ recomendation } type="drinks" />
      {!statistics.done
      && (
        <Link to={ `/foods/${idMeal}/in-progress` }>
          <button
            className="start-button"
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        </Link>)}

    </div>
  );
};

export default Food;
