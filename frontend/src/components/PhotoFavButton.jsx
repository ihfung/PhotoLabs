import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  /*
  const [isFav, setIsFav] = useState(false);
  function handleClick() {
    setIsFav(!isFav);
    toggleFavourite(photoId);
  }
  */
   
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => props.toggleFavourite(props.id)}>
        <FavIcon selected={isFav} displayAlert={false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;