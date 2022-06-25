import React from 'react';
import propTypes from 'prop-types';
import RecomendationCard from './RecomendationCard';

// Galeria
export default function Gallery({ recipes, type }) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {
          recipes.map((recipe, index) => (
            <div key={ index } className="carousel-item active">
              <RecomendationCard
                recipe={ recipe }
                type={ type }
                index={ index }
              />
            </div>
          ))
        }
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

Gallery.propTypes = {
  recipes: propTypes.instanceOf(Object),
  type: propTypes.string,
}.isRequired;
