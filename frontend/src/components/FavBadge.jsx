import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export default function FavBadge ({ isFavPhotoExist }) {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  )
};