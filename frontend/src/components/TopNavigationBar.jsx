import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

import FavBadge from './FavBadge';

export default function TopNavigation ({ state, dispatch }) {

  const isFavPhotoExist = Object.values(state.favourites).find(fav => fav === true);

  const displayFavPhotos = () => {
    fetch("/api/photos", { method: 'GET' })
      .then(res => res.json())
      .then(photos => photos.filter(photo => Object.keys(state.favourites).includes(photo.id.toString()) && state.favourites[photo.id]))
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