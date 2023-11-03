import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import ModalPhotoLarge from 'components/ModalPhotoLarge';

const PhotoDetailsModal = (props) => {
  const { hidden, setHidden, photoData, photos } = props;
  const largePhoto = photos[photoData];

  console.log('photodata: ', photoData);
  console.log('inmodal: ', hidden);

  return (
    <div hidden={!!hidden} className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={() => setHidden(true)} src={closeSymbol} alt="close symbol" />
      </button>
      <ModalPhotoLarge largePhoto={largePhoto}/>
      {/* <PhotoList {...photoData}/> */}
    </div>
  );
};

export default PhotoDetailsModal;
