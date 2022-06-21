import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { MeuContextoInterno } from '../../context/index';
import Header from '../../component/header';
import SearchBar from '../../component/searchBar';

import RecipeCard from '../../component/recipeCard';

const Foods = ({ history }) => {
  const [search, setSearch] = useState(false);
  const {
    recipes: { foods },
    functions: { fetchSearch },
  } = useContext(MeuContextoInterno);

  const toggleSearchBar = () => {
    setSearch(!search);
  };

  // TODO: Transformar em hook personalizado
  const fetchFoods = async (searchText, searchType) => {
    if (searchType === 'fl' && searchText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    const result = await fetchSearch(searchText, searchType, 'MEALS');
    if (result.length === 1) history.push(`/foods/${result[0].idMeal}`);
    toggleSearchBar();
  };

  return (
    <div className="l-foods">
      <Header title="Foods" search callback={ toggleSearchBar } />
      {search && (<SearchBar callback={ fetchFoods } />)}
      Foods
      {foods.map((food, index) => (<RecipeCard
        key={ food.idMeal }
        { ...food }
        index={ index }
      />))}
    </div>
  );
};

Foods.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }),
}.isRequired;

export default Foods;
