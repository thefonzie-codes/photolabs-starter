import React from "react";
import PhotoFavButton from "./PhotoFavButton";

export default function ModalPhotoListItem(props){

    const { 
      photo, 
      dispatch,
      state
    } = props;
  
    const { id, user, urls, location } = photo;
  
    return (
      <article className="photo-list__item">
        <PhotoFavButton dispatch={dispatch} id={id} state={state}/>
        <img className="photo-list__image" src={urls.full} />
        <div>
          <img className="profile photo-list__user-profile" src={user.profile} />
          <div className="photo-list__user-info">
            <h1>{user.username}</h1>
            <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>
          </div>
        </div>
      </article>
    );
  };