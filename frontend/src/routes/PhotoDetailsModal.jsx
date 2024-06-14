import React from 'react';
import PhotoList from '../components/PhotoList';
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
       <div>
        <img src={props.selectPhoto.imageSourceFull}
          alt={`Photo by ${props.selectPhoto.username}`} className="photo-details-modal__image" />
      </div>
      <div>
        <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={props.selectPhoto.profile}
          alt={`${props.selectPhoto.username}'s profile`}
        />
        <div className="photo-details-modal__photographer-info">
          {props.selectPhoto.username}
          <div className="photo-details-modal__photographer-location">{props.selectPhoto.location.city}, {props.selectPhoto.location.country}</div>
        </div>
      </div>
      </div>

      <div className='photo-details-modal__header'>
        <h3>Similar Photos</h3>
      </div>

      <div className='photo-details-modal__images'>
        <div>
       
        </div>
      </div>

    </div>
    </div>
  );
};

export default PhotoDetailsModal;
