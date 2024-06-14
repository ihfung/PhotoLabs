import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = (props) => {
  /* Insert React */
  const {  selectPhoto, photo } = props;
  
  const handleClick = () => {
    
    selectPhoto(photo);
    
  }
  
  return (
   <div className="photo-list__item">
    <PhotoFavButton id={props.photo.id} isFav={props.isFav} toggleFav={ () => props.toggleFav(props.photo.id)}/>
     <img className="photo-list__image" src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} onClick={handleClick}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={`Profile picture of ${photo.user.username}`} />
        <div className="photo-list__user-info">
          <p className="photo-list__username">
            {photo.user.username}
          </p>
          <div className="photo-list__user-location">
          <p>
            {photo.location.city},{" "}
            {photo.location.country}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
