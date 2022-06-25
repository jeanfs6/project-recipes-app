import React from 'react';
import propTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import RecomendationCard from './RecomendationCard';

// Galeria
export default function Gallery({ recipes, type }) {
  return (
    <Carousel autoPlay dynamicHeight infiniteLoop>
      {
        recipes.map((recipe, index) => (
          <div key={ index }>
            <RecomendationCard
              recipe={ recipe }
              type={ type }
              index={ index }
            />
          </div>
        ))
      }
    </Carousel>
  );
}

Gallery.propTypes = {
  recipes: propTypes.instanceOf(Object),
  type: propTypes.string,
}.isRequired;
