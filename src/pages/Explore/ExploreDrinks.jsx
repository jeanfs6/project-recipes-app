import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header';
import Footer from '../../component/Footer';

const ExploreDrinks = () => {
  const [id, setId] = useState('');

  useEffect(() => {
    const getAleatoryId = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
      const response = await fetch(url);
      const { drinks } = await response.json();
      setId(drinks[0].idDrink);
    };
    getAleatoryId();
  }, [setId]);

  return (
    <div className="l-explore-drinks">
      <Header title="Explore Drinks" />
      <Link
        to="/explore/drinks/ingredients"
        data-testid="explore-by-ingredient"
        className="btn btn-primary btn-dark"
      >
        By Ingredient
      </Link>
      <Link
        to={ `/drinks/${id}` }
        data-testid="explore-surprise"
        className="btn btn-primary btn-dark"
      >
        Surprise me!
      </Link>
      <Footer />
    </div>
  );
};

export default ExploreDrinks;
