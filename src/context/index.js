import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import * as Api from '../helpers/Api/index';

export const MeuContextoInterno = createContext();

const APIS = {
  MEALS__ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  MEALS__name: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  MEALS__fl: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  DRINKS__ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  DRINKS__name: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  DRINKS__fl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
};

function ProvedorContextoDoStars({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([]);
  const [mealsCat, setMealsCat] = useState([]);
  const [drinksCat, setDrinksCat] = useState([]);

  // TODO: Transformar o if e else em template literals
  const fetchSearch = async (searchText, searchType, foodType) => {
    const foodTypeLower = foodType.toLowerCase();

    const response = await Api.fetchApis(
      APIS[`${foodType}__${searchType}`] + searchText, foodTypeLower,
    );

    console.log('Resposta: ', response);
    if (foodTypeLower === 'meals') setFoods(response);
    else setDrinks(response);
    return response;
  };

  useEffect(() => {
    const fetchApiFoods = async () => {
      const json = await Api.fetchApis(APIS.MEALS__name, 'meals');
      setFoods(json);
    };
    fetchApiFoods();

    const fetchApiDrinks = async () => {
      const json = await Api.fetchApis(APIS.DRINKS__name, 'drinks');
      setDrinks(json);
    };
    fetchApiDrinks();
  }, []);

  useEffect(() => {
    const MAX_CAT = 5;
    const getCatMeals = async () => {
      const dataApi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const allCatMeals = await dataApi.json();
      const { meals } = allCatMeals;
      const result = meals.slice(0, MAX_CAT);
      setMealsCat(result);
    };
    getCatMeals();
  }, []);
  useEffect(() => {
    const MAX_CAT = 5;
    const getCatDrinks = async () => {
      const dataApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const allCatDrinks = await dataApi.json();
      const { drinks: allDrinks } = allCatDrinks;
      const result = allDrinks.slice(0, MAX_CAT);
      setDrinksCat(result);
    };
    getCatDrinks();
  }, []);

  const contexto = {
    recipes: {
      drinks,
      foods,
    },
    functions: {
      fetchSearch,
    },
    mealsCat,
    drinksCat,

  };

  return (
    <MeuContextoInterno.Provider value={ contexto }>
      { children }
    </MeuContextoInterno.Provider>
  );
}

ProvedorContextoDoStars.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProvedorContextoDoStars;
