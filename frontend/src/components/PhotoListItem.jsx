import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  const { sampleDataForPhotoListItem } = props;
  return (
    <div className="photoListItem">
      <img src={sampleDataForPhotoListItem.imageSource} />
      <br></br>
      <img src={sampleDataForPhotoListItem.profile} />
      <br></br>
      <a href="#">{sampleDataForPhotoListItem.username}</a>
      <br></br>
      <a href="#">{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</a>
    </div>

  );
};

export default PhotoListItem;
