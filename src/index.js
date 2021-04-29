import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './header';
import Profile from './profile';
import ReposItem from './itemRepos';
import Footer from './footer';

ReactDOM.render(
  <div>
    <Header />
    <div className="container">
      <Profile />
      <div id="repos-container">
          <ReposItem />
      </div>
    </div>
    <Footer />
  </div>,document.getElementById('root')
);

