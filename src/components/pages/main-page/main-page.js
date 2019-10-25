import React from 'react';
import Lucas from './Lucas.jpg';
import './main-page.css';

const MainPage = () => {
  return (
      <div className="container">
          <h2>Welcome to Star Wars Universe</h2>
          <img className="img-fluid" src={Lucas} alt="img"/>
      </div>
  );
};

export default MainPage;
