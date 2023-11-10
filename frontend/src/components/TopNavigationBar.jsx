import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

import FavBadge from './FavBadge';

const TopNavigation = ({ state, dispatch }) => {

  const isFavPhotoExist = Object.values(state.favourites).find(x => x === true);

  const displayFavPhotos = () => {
    fetch("/api/photos", { method: 'GET' })
      .then(res => res.json())
      .then(photos => photos.filter(x => Object.keys(state.favourites).includes(x.id.toString()) && state.favourites[x.id]))
      .then(favs => dispatch({ type: "SET_PHOTO_DATA", value: favs}))
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={state.topics} dispatch={dispatch} />
      <span onClick={displayFavPhotos}><FavBadge  isFavPhotoExist={isFavPhotoExist}/></span>
    </div>
  )
}

export default TopNavigation;