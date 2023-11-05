import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const {
    state,
    dispatch
  } = props;

  const photoListItemComponents = state.photos.map(photo =>
    <PhotoListItem
    key = {photo.id}
    id = {photo.id}
    state={state}
    dispatch={dispatch}
    />
  );

  return (
    <ul className="photo-list">
      {photoListItemComponents}
    </ul>
  );
};

export default PhotoList;
