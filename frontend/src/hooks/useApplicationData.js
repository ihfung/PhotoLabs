import React, {useReducer} from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}


export default function useApplicationData () {

  

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return { /* insert logic */ }
    { /* insert all relevant actions as case statements*/ }  
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
  
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

