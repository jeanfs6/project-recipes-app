import React, { useState } from 'react';
import Header from '../../../component/header';
import SearchBar from '../../../component/searchBar';
import Footer from '../../../component/Footer';

const ExpFoodsNat = () => {
  const [search, setSearch] = useState(false);

  const toggleSearchBar = () => {
    setSearch(!search);
  };

  return (
    <div className="l-explore-foods-nationalities">
      <Header title="Explore Nationalities" search callback={ toggleSearchBar } />
      {search && (<SearchBar />)}
      ExploreFoodsNationalities
      <Footer />
    </div>
  );
};

export default ExpFoodsNat;
