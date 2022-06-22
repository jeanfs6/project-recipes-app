import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer" data-testid="footer">
    <div>
      <Link to="/drinks">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Drink Icon"
        />
      </Link>
      <Link to="/explore">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="Explore Icon"
        />
      </Link>
      <Link to="/foods">
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="Food Icon"
        />
      </Link>
    </div>
  </footer>
);

// Footer.propTypes = {
//   title: propTypes.string,
// }.isRequired;

export default Footer;
