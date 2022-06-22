import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { MeuContextoInterno } from '../../context/index';
import Header from '../../component/header';
import SearchBar from '../../component/searchBar';

import RecipeCard from '../../component/recipeCard';

const MAX_RECIPES = 12;

const Drinks = ({ history }) => {
  const [search, setSearch] = useState(false);
  const {
    recipes: { drinks },
    functions: { fetchSearch },
  } = useContext(MeuContextoInterno);

  const toggleSearchBar = () => {
    setSearch(!search);
  };

  const noResults = () => {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return <p>Sorry, we haven&apos;t found any recipes for these filters.</p>;
  };

  // TODO: Transformar em hook personalizado
  const fetchDrinks = async (searchText, searchType) => {
    if (searchType === 'fl' && searchText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    const result = await fetchSearch(searchText, searchType, 'DRINKS');
    if (result && result.length === 1) history.push(`/drinks/${result[0].idDrink}`);
    toggleSearchBar();
  };

  return (
    <div className="l-drink">
      <Header title="Drinks" search callback={ toggleSearchBar } />
      {search && (<SearchBar callback={ fetchDrinks } />)}
      {drinks
        ? drinks.slice(0, MAX_RECIPES).map((drink, index) => (
          <RecipeCard
            key={ drink.idDrink }
            recipe={ drink }
            type="Drink"
            index={ index }
          />))
        : noResults()}
    </div>
  );
};

Drinks.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }),
}.isRequired;

export default Drinks;
