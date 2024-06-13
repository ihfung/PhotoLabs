import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const sampleDataForPhotoList = photos;

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {sampleDataForPhotoList.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem username={photo.user.username} location={photo.location} profile={photo.user.profile} imageSource={photo.urls.regular}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
