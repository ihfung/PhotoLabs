import React from "react";

import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {sampleDataForPhotoList.map((photo) => (
        <li key={photo.id} className="photo-list-item">
          <img
            className="photo-list-item-image"
            src={photo.urls.regular}
            alt={`Photo by ${photo.user.name}`}
          />
          <div className="photo-list-item-user">
            <img
              className="photo-list-item-user-profile"
              src={photo.user.profile}
              alt={`Profile of ${photo.user.name}`}
            />
            <span className="photo-list-item-user-name">{photo.user.name}</span>
          </div>
          <div className="photo-list-item-location">
            <span className="photo-list-item-location-city">{photo.location.city}</span>
            <span className="photo-list-item-location-country">{photo.location.country}</span>
          </div>
        </li>
      
      ))}
    </ul>
  );
};

export default PhotoList;
