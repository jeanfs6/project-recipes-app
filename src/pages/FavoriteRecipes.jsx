import React from 'react';
import Header from '../component/header';

const FavoriteRecipes = () => (
  <div className="l-favorite-recipes">
    <Header title="Favorite Recipes" />
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

  </div>
);

export default FavoriteRecipes;
