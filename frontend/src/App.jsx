import React, {useState} from 'react';
import useApplicationData from './hooks/useApplicationData';
//import PhotoListItem from './components/PhotoListItem';
//import PhotoList from './components/PhotoList';
//import TopNavigationBar from './components/TopNavigationBar';   
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
//import mockTopics from './mocks/topics';
//import mockPhotos from './mocks/photos';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const [isFav, setIsFav] = useState([]);
  // const [closeModal, setCloseModal] = useState(false); //displayModal = false by default setDisplayModal = function to change the value of displayModal
  // const [selectedPhoto, setSelectedPhoto] = useState(null); //selectedPhoto = null by default setSelectedPhoto = function to change the value of selectedPhoto
  const {
    isFav,
    selectedPhoto,
    toggleFav,
    toggleModal,
    handleSelectPhoto,
    photoData,
    topicData,
    handleTopicPhotos
  } = useApplicationData();

  // const toggleFav = (photoId) => {
  //   if (isFav.includes(photoId)) {
  //     setIsFav(isFav.filter((id) => id !== photoId));
  //   } else {
  //     setIsFav([...isFav, photoId]);
  //   }
  // };

  // const toggleModal = () => {
  //   setSelectedPhoto(null); //set selectedPhoto to null
  //   setCloseModal(!closeModal); //toggle the value of displayModal to true or false
  // };

  // const handleSelectPhoto = (photoDetails) => {
  //   setSelectedPhoto(photoDetails);
  //   setCloseModal(true);
  // }

  // const selectedPhotoGroup = mockPhotos.find((photo) => photo.id === selectedPhoto);
//Modify your App.jsx so that state.photoData is being passed into HomeRoute via props.
return (
  <div className="App">
    <HomeRoute photos={photoData} topics={topicData} handleTopicPhotos={handleTopicPhotos} isFav={isFav} toggleFav={toggleFav} toggleModal={toggleModal} selectPhoto={handleSelectPhoto}/>
    {selectedPhoto && <PhotoDetailsModal 
    toggleModal={toggleModal} 
    selectPhoto={selectedPhoto}
    selectedPhotoGroup={Object.values(selectedPhoto.similar_photos)}
    isFav={isFav}
    toggleFav={toggleFav}
    />}
  </div>
);
};

export default App;
