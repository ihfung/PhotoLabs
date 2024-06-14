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
            photoId={photo.id}
            toggleFav={props.toggleFav} 
            isFav={props.isFav.includes(photo.id)} 
            selectPhoto={props.selectPhoto}
            photo={photo}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
