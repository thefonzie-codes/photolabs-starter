import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import useDisplayFavPhotos from 'hooks/useDisplayFavPhotos';

import FavBadge from './FavBadge';

export default function TopNavigation ({ state, dispatch }) {

  const isFavPhotoExist = Object.values(state.favourites).find(fav => fav === true);

  return (
    <div className="top-nav-bar hidden">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={state.topics} dispatch={dispatch} />
      <span onClick={() => useDisplayFavPhotos(state, dispatch)}><FavBadge  isFavPhotoExist={isFavPhotoExist}/></span>
    </div>
  )
}