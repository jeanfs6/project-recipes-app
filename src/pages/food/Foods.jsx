import React, { useState, useContext } from 'react';
import { MeuContextoInterno } from '../../context/index';
import Header from '../../component/header';
import SearchBar from '../../component/searchBar';

const Foods = () => {
  const [search, setSearch] = useState(false);
  const { functions: { fetchSearch } } = useContext(MeuContextoInterno);

  const toggleSearchBar = () => {
    setSearch(!search);
  };

  const fetchFoods = (searchText, searchType) => {
    if (searchType === 'fl' && searchText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    fetchSearch(searchText, searchType, 'MEALS');
    toggleSearchBar();
  };

  return (
    <div className="l-foods">
      <Header title="Foods" search callback={ toggleSearchBar } />
      {search && (<SearchBar callback={ fetchFoods } />)}
      Foods
    </div>
  );
};

export default Foods;
