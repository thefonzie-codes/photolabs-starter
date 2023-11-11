import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import ModalPhotoLarge from 'components/ModalPhotoLarge';
import closeSymbol from '../assets/closeSymbol.svg';
import ModalPhotoList from 'components/ModalPhotoList';

export default function PhotoDetailsModal ({ state, dispatch }) {
  const largePhoto = state.selectedPhoto;

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar '>
        <button className="photo-details-modal__close-button">
          <img onClick={() => dispatch({ type: "CLOSE_MODAL" })} src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <ModalPhotoLarge
        largePhoto={largePhoto}
        state={state}
        dispatch={dispatch} />
      <ModalPhotoList
        similarPhotos={largePhoto.similar_photos}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};
