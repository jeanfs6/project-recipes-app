import React, { useState, useContext } from 'react';
import { MeuContextoInterno } from '../../context/index';
import Header from '../../component/header';
import SearchBar from '../../component/searchBar';

const Drink = () => {
  const [search, setSearch] = useState(false);
  const { functions: { fetchSearch } } = useContext(MeuContextoInterno);

  const toggleSearchBar = () => {
    setSearch(!search);
  };

  const fetchDrinks = (searchText, searchType) => {
    if (searchType === 'fl' && searchText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    fetchSearch(searchText, searchType, 'DRINKS');
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

export default Drink;
