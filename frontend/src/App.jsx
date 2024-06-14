import React, {useState} from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import PhotoList from './components/PhotoList';
//import TopNavigationBar from './components/TopNavigationBar';   
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import mockTopics from './mocks/topics';
import mockPhotos from './mocks/photos';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
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

return (
  <div className="App">
    <HomeRoute photos={mockPhotos} topics={mockTopics} isFav={isFav} toggleFav={toggleFav} toggleModal={toggleModal} selectedPhoto={handleSelectPhoto}/>
    {closeModal && <PhotoDetailsModal 
    toggleModal={toggleModal} 
    selectPhoto={selectedPhoto}
    />}
  </div>
);
};

export default App;
