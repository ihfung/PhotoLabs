import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


//const sampleDataForPhotoList = photos;

const PhotoList = (props) => {
 
  
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
            isFav={props.isFav.includes(props.photos.id)} 
            selectedPhoto={props.selectedPhoto}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
