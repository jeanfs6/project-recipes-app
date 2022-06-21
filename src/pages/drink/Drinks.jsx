import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { MeuContextoInterno } from '../../context/index';
import Header from '../../component/header';
import SearchBar from '../../component/searchBar';

const Drinks = ({ history }) => {
  const [search, setSearch] = useState(false);
  const {
    functions: { fetchSearch },
  } = useContext(MeuContextoInterno);

  const toggleSearchBar = () => {
    setSearch(!search);
  };

  // TODO: Transformar em hook personalizado
  const fetchDrinks = async (searchText, searchType) => {
    if (searchType === 'fl' && searchText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    const result = await fetchSearch(searchText, searchType, 'DRINKS');
    if (result.length === 1) history.push(`/drinks/${result[0].idDrink}`);
    toggleSearchBar();
  };

  return (
    <div className="l-drink">
      <Header title="Drinks" search callback={ toggleSearchBar } />
      {search && (<SearchBar callback={ fetchDrinks } />)}
      Drinks
    </div>
  );
};

Drinks.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }),
}.isRequired;

export default Drinks;
