import React from 'react';

export default function ModalPhotoLarge(props) {
  const { largePhoto } = props;
  const { user, urls, location } = largePhoto;

  return (
    <article className="photo-details-modal__images">
      <div>
        {/* <PhotoFavButton 
  handleUserFavourite={() => handleUserFavourite()} selected={favourite} 
  /> */}
        <img className="photo-details-modal__image" src={urls.full} />
        <div>
          <img className="photo-details-modal__photographer-profile" src={user.profile} />
          <div className="photo-details-modal__header">
            <h1>{user.username}</h1>
            <h2 className="photo-details-modal__photographer-location">{location.city}, {location.country}</h2>
          </div>
        </div>
      </div>
    </article>
  );
}