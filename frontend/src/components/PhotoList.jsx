import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


//const sampleDataForPhotoList = photos;

const PhotoList = ({photos}) => {
  const [isFav, setIsFav] = useState(false);
  const handleClick = () => {
    setIsFav(!isFav);
  };
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem username={photo.user.username} location={photo.location} profile={photo.user.profile} imageSource={photo.urls.regular}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
