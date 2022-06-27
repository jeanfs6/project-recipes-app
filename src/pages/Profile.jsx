import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/Footer';
import * as localApi from '../helpers/localApi/index';

const Profile = () => {
  const [userEmail, setUserEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getUserEmail = () => {
      const localStorage = localApi.getLocalKey('user');
      if (localStorage) {
        const { email } = localStorage;
        setUserEmail(email);
      }
    };
    getUserEmail();
  }, [setUserEmail]);

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="l-profile">
      <Header title="Profile" />
      <section className="d-grid gap-2 col-10 mx-auto d-flex flex-column">
        <p data-testid="profile-email">{ userEmail }</p>
        <Link
          to="/done-recipes"
          data-testid="profile-done-btn"
          className="btn btn-primary btn-dark"
        >
          Done Recipes
        </Link>

        <Link
          to="/favorite-recipes"
          data-testid="profile-favorite-btn"
          className="btn btn-primary btn-dark"
        >
          Favorite Recipes
        </Link>

        <button
          type="button"
          onClick={ handleLogout }
          data-testid="profile-logout-btn"
          className="btn btn-primary btn-dark"
        >
          Logout
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
