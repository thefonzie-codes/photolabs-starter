import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ dispatch, id, state }) {
  const isFavourite = state.favourites[id] ? true : false;

  return (
    <div onClick={() => dispatch({ type: "FAV_PHOTO_TOGGLE", value: id })} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;