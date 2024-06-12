import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  const { username, location, profile, imageSource } = props;
  return (
   <div className="photo-list__item">
      <img className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"
          src={profile}
          alt={`Profile of ${username}`}
        />
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
