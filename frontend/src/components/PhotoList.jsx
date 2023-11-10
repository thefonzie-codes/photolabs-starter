import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ state, dispatch }) => {

  const photoListItemComponents = state.photos.map(photo =>
    <PhotoListItem
      photo={photo}
      key={photo.id}
      state={state}
      dispatch={dispatch}
    />
  );

  return (
    <ul className="photo-list">
      {state.photos[0] ? photoListItemComponents : <h1>No favorites yet!</h1>}
    </ul>
  );
};

export default PhotoList;