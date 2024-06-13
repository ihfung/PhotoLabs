import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId, toggleFav}) {
  const [isFav, setIsFav] = useState(false);
  function handleClick() {
    setIsFav(!isFav);
    toggleFavourite(photoId);
  }
   
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={isFav} displayAlert={false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;