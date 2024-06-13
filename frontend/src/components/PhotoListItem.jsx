import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = (props) => {
  /* Insert React */
  const { username, location, profile, imageSource, photoId, toggleFav, favourites } = props;
  
  return (
   <div className="photo-list__item">
    <PhotoFavButton photoId={photoId} toggleFav={toggleFav} favourites={favourites}/>
     <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile picture of ${username}`} />
        <div className="photo-list__user-info">
          <p className="photo-list__username">
            {username}
          </p>
          <div className="photo-list__user-location">
          <p>
            {location.city},{" "}
            {location.country}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
