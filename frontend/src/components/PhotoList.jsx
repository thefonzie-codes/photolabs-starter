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
    photo={photo}
    key = {photo.id}
    // urls = {photo.urls}
    // user = {photo.user}
    // location = {photo.location}
    // id = {photo.id}
    state = {state}
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
