import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);
  const handleClick = () => {
    
    setIsFav(prevIsFav => !prevIsFav);
    console.log(isFav);
  };
    /*
    if (isFav === "inactive") {
      setIsFav("active");
    } else {
      setIsFav("inactive");
    }
    */
  

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon fill={isFav === false ?  "#FF0000" : "#EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;