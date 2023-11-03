import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const {
    photos,
    setUserLikes,
    userLikes,
    setHidden,
    setPhotoData
  } = props;

  const createPhotoListItemComponent = photos.map(photo =>
    <PhotoListItem
      photo={photo}
      key={photo.id}
      setUserLikes={setUserLikes}
      userLikes={userLikes}
      setHidden={setHidden}
      setPhotoData={setPhotoData}
    />
  );

  return (
    <ul className="photo-list">
      {createPhotoListItemComponent}
    </ul>
  );
};

export default PhotoList;
