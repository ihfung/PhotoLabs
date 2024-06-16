import React from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  //console.log(props.selectPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick= {() => {props.toggleModal()}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    <div>
        <PhotoFavButton 
          photoId={props.selectPhoto.id}
          isFav={props.isFav.includes(props.selectPhoto.id)} // includes is a method that checks if an array includes a certain value
          toggleFav={props.toggleFav}
          handleSelectPhoto={props.handleSelectPhoto}
          />
        <img
          className="photo-details-modal--images"
          src={props.selectPhoto.urls.regular}
          alt="Photo"
        />
        
        <div className="photo-details-modal--photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.selectPhoto.user.profile} />
          <div className="photo-details-modal__photographer-info">
              <p>{props.selectPhoto.user.username}</p>
              
              <div className="photo-details-modal__photographer-location">
                <p>
                  {props.selectPhoto.location.city},{" "}
                  {props.selectPhoto.location.country}
                </p>
              </div>
            </div>
        </div>
        
      </div>
      <hr></hr>
      <header className="photo-details-modal--header">Similar photos</header>
      <PhotoList photos={props.selectedPhotoGroup} isFav={props.isFav}
      toggleFav={props.toggleFav}/>
    </div>
    
  );
};

export default PhotoDetailsModal;
