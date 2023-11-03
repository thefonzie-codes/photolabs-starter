import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  
  const { photos, setUserLikes, userLikes, hidden, setHidden } = props;

  const createPhotoListItemComponent = photos.map(photo => 
    <PhotoListItem photo={photo} key={photo.id} setUserLikes={setUserLikes} userLikes={userLikes} hidden={hidden} setHidden={setHidden}/>
  );

  return (
    <ul className="photo-list">
      {createPhotoListItemComponent}
    </ul>
  );
};

export default PhotoList;
