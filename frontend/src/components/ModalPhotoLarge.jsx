import React from 'react';
import PhotoFavButton from './PhotoFavButton';

export default function ModalPhotoLarge(props) {
  const { largePhoto, dispatch, state } = props;
  const { id, user, urls, location } = largePhoto;

  return (
    <article className="photo-details-modal__large">
      <>
        <PhotoFavButton
          dispatch={dispatch}
          id={id}
          state={state} />
        <img className="photo-details-modal__image" src={urls.full} />
      </>
      <div className='photo-details-modal__photographer-details'>
        <img className="photo-details-modal__photographer-profile" src={user.profile} />
        <div className="photo-details-modal__header">
          <h1>{user.username}</h1>
          <h3 className="photo-details-modal__photographer-location">{location.city}, {location.country}</h3>
        </div>
      </div>
    </article>
  );
}