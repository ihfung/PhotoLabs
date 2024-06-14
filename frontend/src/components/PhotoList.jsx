import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


//const sampleDataForPhotoList = photos;

const PhotoList = (props) => {
 
  const photoFavs = props.isFav.includes(props.photos.id);
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {props.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem 
            username={photo.user.username} 
            location={photo.location} 
            profile={photo.user.profile} 
            imageSource={photo.urls.regular} 
            photoId={photo.id} 
            toggleFav={props.toggleFav} 
            isFav={photoFavs} 
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
