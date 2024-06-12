import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);
  const fav =  () => setIsFav((isFav === true) ? false : true);
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <button onClick={fav}></button>
      </div>
    </div>
  );
}

export default PhotoFavButton;