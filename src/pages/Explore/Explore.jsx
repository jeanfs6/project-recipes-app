import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header';
import Footer from '../../component/Footer';

const Explore = () => (
  <div className="l-explore">
    <Header title="Explore" />
    <Link
      to="/explore/foods"
      data-testid="explore-foods"
      className="btn btn-primary btn-dark"
    >
      Explore Foods
    </Link>
    <Link
      to="/explore/drinks"
      data-testid="explore-drinks"
      className="btn btn-primary btn-dark"
    >
      Explore Drinks
    </Link>
    <Footer />
  </div>
);

export default Explore;
