import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import '../../component/recipeCard.css';

const arrayIndex = ['recipe1', 'recipe2', 'recipe3', 'recipe4', 'recipe5', 'recipe6'];

const Drink = () => {
  const { id: urlId } = useParams();

  const [recipeDetails, setRecipeDetails] = useState({});
  const {
    strDrinkThumb,
    strDrink,
    strAlcoholic,
    strInstructions,
  } = recipeDetails;

  useEffect(() => {
    const getRecipe = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${urlId}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipeDetails(data.drinks[0]);
    };
    getRecipe();
  }, [urlId]);

  const filterIgredients = (recipe) => {
    const FIFTEEN = 15;
    const ingredientList = [];

    for (let i = 1; i <= FIFTEEN; i += 1) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (recipe[ingredientKey] !== null && recipe[measureKey] !== null) {
        const ingredient = `${recipe[ingredientKey]}: ${recipe[measureKey]}`;
        ingredientList.push(ingredient);
      }
    }

    return ingredientList;
  };

  return (
    <div>
      <h1 data-testid="recipe-title" className="l-drink">{ strDrink }</h1>

      <img
        className="card-img card-img-mine"
        data-testid="recipe-photo"
        src={ strDrinkThumb }
        alt={ strDrink }
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

      <p data-testid="recipe-category">{strAlcoholic}</p>

      <ul>
        {filterIgredients(recipeDetails).map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingredient }
          </li>
        ))}
      </ul>

      <p data-testid="instructions">{strInstructions}</p>

      {arrayIndex.map((item, index) => (
        <h3 key={ index } data-testid={ `${index}-recomendation-card` }>{item}</h3>
      ))}

      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Start
      </button>
    </div>
  );
};

export default Drink;
