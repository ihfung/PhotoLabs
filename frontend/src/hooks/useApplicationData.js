import React, {useState} from 'react';

export default function useApplicationData () {
  const [isFav, setIsFav] = useState([]);
  const [closeModal, setCloseModal] = useState(false); //displayModal = false by default setDisplayModal = function to change the value of displayModal
  const [selectedPhoto, setSelectedPhoto] = useState(null); //selectedPhoto = null by default setSelectedPhoto = function to change the value of selectedPhoto

  const toggleFav = (photoId) => {
    if (isFav.includes(photoId)) {
      setIsFav(isFav.filter((id) => id !== photoId));
    } else {
      setIsFav([...isFav, photoId]);
    }
  };

  const toggleModal = () => {
    setSelectedPhoto(null); //set selectedPhoto to null
    setCloseModal(!closeModal); //toggle the value of displayModal to true or false
  };

  const handleSelectPhoto = (photoDetails) => {
    setSelectedPhoto(photoDetails);
    setCloseModal(true);
  }

  return {
    toggleFav,
    toggleModal,
    handleSelectPhoto,
    selectedPhoto,
    isFav,
    closeModal
  };
}

