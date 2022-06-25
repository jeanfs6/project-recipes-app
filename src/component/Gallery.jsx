import React from 'react';
import propTypes from 'prop-types';
import Carousel from 'better-react-carousel';
import RecomendationCard from './RecomendationCard';

// Galeria
export default function Gallery({ recipes, type }) {
  return (
    <Carousel cols={ 2 } rows={ 1 } gap={ 10 } loop>
      {
        recipes.map((recipe, index) => (
          <Carousel.Item key={ index }>
            <RecomendationCard
              recipe={ recipe }
              type={ type }
              index={ index }
            />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

Gallery.propTypes = {
  recipes: propTypes.instanceOf(Object),
  type: propTypes.string,
}.isRequired;
