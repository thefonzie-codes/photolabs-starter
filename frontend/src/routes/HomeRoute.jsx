import React from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';


const HomeRoute = ({ state, dispatch }) => {

  return (
    <div className="home-route">
      <TopNavigation
        state={state}
        dispatch={dispatch}
      />
      <PhotoList
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default HomeRoute;