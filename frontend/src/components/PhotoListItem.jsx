import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  const sampleData = props.sampleDataForPhotoListItem;
  return (
    <div className="photoListItem">
      <img src={sampleData.imageSource} />
      <br></br>
      <img src={sampleData.profile} />
      <br></br>
      <a href="#">{sampleData.username}</a>
      <br></br>
      <a href="#">{sampleData.location.city}, {sampleData.location.country}</a>
    </div>

  );
};

export default PhotoListItem;
