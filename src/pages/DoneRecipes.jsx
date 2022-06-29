import React, { useState } from 'react';
import Header from '../component/header';
import SavedRecipesCard from '../component/SavedRecipesCard';
import * as localApi from '../helpers/localApi';

const DoneRecipes = () => {
  const [favoriteDone] = useState(localApi.getLocalKey('doneRecipes'));
  const [filterRecipes, setFilterRecipes] = useState([]);

  const getFilteredRecipes = ({ target }) => {
    if (target.name === 'food') {
      const filtered = favoriteDone.filter((filter) => filter.type === 'food');
    }
  };
  return (
    <div className="l-done-recipes">
      <Header title="Done Recipes" />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>
      {favoriteDone.map((favorite, index) => (
        <SavedRecipesCard key={ index } favorite={ favorite } index={ index } />
      ))}
    </div>
  );
};

export default DoneRecipes;
