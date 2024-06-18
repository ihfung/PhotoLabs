import React, { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_MODAL: 'TOGGLE_MODAL'
};

const initialState = {
  isFav: [],
  photoData: [],
  topicData: [],
  topicPhotosId: null,
  closeModal: false,
  selectedPhoto: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, isFav: [...state.isFav, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, isFav: state.isFav.filter((id) => id !== action.payload)};
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload, closeModal: true };
    case ACTIONS.TOGGLE_MODAL:
      return { ...state, selectedPhoto: null, closeModal: !state.closeModal };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, topicPhotosId: action.payload.topicPhotosId };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (photoId) => {
    console.log("toggleFav", state.isFav);
    if (state.isFav.includes(photoId)) { //includes() is a method that checks if an array includes a certain element. It returns true if the element is present in the array, otherwise, it returns false.
      console.log("abc");
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      console.log("def");
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const handleSelectPhoto = (photoDetails) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails });
  };

  const handleTopicPhotos = (topicId) => {  
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { topicPhotosId: topicId } });
  };


  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
    }, []); 

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
    }, []); 

  useEffect(() => {
    if (state.topicPhotosId !== null) {
      
      fetch(`/api/topics/photos/${state.topicPhotosId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }); //action is going to set the photo data and not get photos by topics because we are already in the topic
      });
    
    }
    
  }, [state.topicPhotosId]);

  return {
    toggleFav,
    toggleModal,
    handleSelectPhoto,
    handleTopicPhotos,
    selectedPhoto: state.selectedPhoto,
    isFav: state.isFav,
    closeModal: state.closeModal,
    photoData: state.photoData,
    topicData: state.topicData
  };
}
