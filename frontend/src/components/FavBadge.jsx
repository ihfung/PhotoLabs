import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/* <FavIcon displayAlert={!!isFavPhotoExist} selected/> */}
      <FavIcon
        width={20}
        height={17}
        fill="#C80000"
        displayAlert={!!isFavPhotoExist}
        selected
      />
    </div>
  ) 
};

export default FavBadge;