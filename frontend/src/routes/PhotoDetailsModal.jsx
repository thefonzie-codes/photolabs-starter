import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { hidden, setHidden } = props;

  console.log('inmodal: ', hidden)
  return (
    <div hidden={!!hidden} className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={() => setHidden(true)} src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
