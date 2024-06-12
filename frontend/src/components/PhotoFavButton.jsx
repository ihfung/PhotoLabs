import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState("inactive");
 const handClick = () => { setIsFav(isFav === "inactive" ? "active" : "inactive"); 
    /*
    if (isFav === "inactive") {
      setIsFav("active");
    } else {
      setIsFav("inactive");
    }
    */
  };

  return (
    <div className="photo-list__fav-icon">
      <div className={`photo-list__fav-icon-svg ${isFav === 'active' ? 'active' : 'inactive'}`} onClick={handClick}>
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;