import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from 'components/PhotoList';
import ModalPhotoLarge from 'components/ModalPhotoLarge';
import ModalTopBar from 'components/ModalTopBar';
import closeSymbol from '../assets/closeSymbol.svg';
import ModalPhotoList from 'components/ModalPhotoList';

const PhotoDetailsModal = (props) => {
  const {
    state,
    dispatch,
  } = props;
  const largePhoto = state.photos[state.selectedPhoto - 1];
  
  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar '>
        <button className="photo-details-modal__close-button">
          <img onClick={() => dispatch({ type: "CLOSE_MODAL"})} src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <ModalPhotoLarge
        largePhoto={largePhoto}
        state={state}
        dispatch={dispatch} />
      <ModalPhotoList
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default PhotoDetailsModal;
