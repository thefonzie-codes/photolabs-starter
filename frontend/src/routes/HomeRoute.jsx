import React from 'react';

import '../styles/HomeRoute.scss';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import MobileNav from 'components/MobileNav';


export default function HomeRoute({ state, dispatch }) {

  return (
    <div className="home-route">
      { window.matchMedia("screen and (min-width: 1024px)").matches && <TopNavigation
        state={state}
        dispatch={dispatch}
      /> }
      <PhotoList
        state={state}
        dispatch={dispatch}
      />
      <MobileNav
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};