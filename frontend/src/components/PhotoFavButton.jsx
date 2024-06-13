import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  //array destructuring is used to create a state variable and a function to update the state variable
  const [isFav, setIsFav] = useState(false); //array destructuring, isFav is the state variable and setIsFav is the function to update the state variable
  const handleClick = () => {
    
    setIsFav((prevIsFav) => !prevIsFav); // toggle the state of isFav from true to false or vice versa
    console.log(isFav);
  };
   
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;