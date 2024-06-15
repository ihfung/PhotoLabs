import React, { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL'
};

const initialState = {
  isFav: [],
  closeModal: false,
  selectedPhoto: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, isFav: [...state.isFav, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, isFav: state.isFav.filter((id) => id !== action.payload) };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload, closeModal: true };
    case ACTIONS.TOGGLE_MODAL:
      return { ...state, selectedPhoto: null, closeModal: !state.closeModal };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (photoId) => {
    if (state.isFav.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const handleSelectPhoto = (photoDetails) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails });
  };

  return {
    toggleFav,
    toggleModal,
    handleSelectPhoto,
    selectedPhoto: state.selectedPhoto,
    isFav: state.isFav,
    closeModal: state.closeModal
  };
}
