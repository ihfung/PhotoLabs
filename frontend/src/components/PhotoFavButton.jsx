import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId, isFav, toggleFav }) {
  const handleClick = () => {
    toggleFav(photoId);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon 
          selected={isFav} 
          displayAlert={false}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
