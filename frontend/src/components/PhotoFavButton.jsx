import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photo, toggleFav}) {
  //check the photoId is in the favourites array
  const [isFav, setIsFav] = useState(false);
  const handleClick = () => {
    setIsFav(!isFav);
    toggleFav(photo);
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