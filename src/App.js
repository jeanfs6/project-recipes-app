import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './component/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          {/* <Route exact path="/foods" component={ Foods } />
          <Route exact path="/foods/:id" component={ Food } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id" component={ Drink } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsIngredients }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsNationalities }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
