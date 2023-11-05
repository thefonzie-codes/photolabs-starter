import React from 'react';
import PhotoFavButton from './PhotoFavButton';

export default function ModalPhotoLarge(props) {
  const { largePhoto, dispatch, state } = props;
  const { id, user, urls, location } = largePhoto;

  return (
    <article className="photo-details-modal__images">
      <div>
        <PhotoFavButton
          dispatch={dispatch}
          id={id}
          state={state}/>
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