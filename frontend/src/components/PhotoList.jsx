import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  
  const { photos, setUserLikes, userLikes } = props;

  // const [userLikes, setUserLikes] = useState(0);
  // const handleUserLikes = (fav) => fav ? setUserLikes(userLikes + 1) : setUserLikes(userLikes - 1);

  const createPhotoListItemComponent = photos.map(photo => 
    <PhotoListItem photo={photo} key={photo.id} setUserLikes={setUserLikes} userLikes={userLikes}/>
  );

  return (
    <ul className="photo-list">
      {createPhotoListItemComponent}
    </ul>
  );
};

export default PhotoList;
