import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props.selectPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick= {() => {props.toggleModal()}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <img className="photo-details-modal__image" src={props.selectPhoto.imageSource} alt={`Photo by ${props.selectPhoto.username}`} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.selectPhoto.profile} alt={`Profile picture of ${props.selectPhoto.username}`} />
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__header">{props.selectPhoto.username}</p>
            <p className="photo-details-modal__photographer-location">
              {props.selectPhoto.location.city}, {props.selectPhoto.location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
