import React, {useState} from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import PhotoList from './components/PhotoList';
//import TopNavigationBar from './components/TopNavigationBar';   
import HomeRoute from './routes/HomeRoute';
import PhotoModal from './routes/PhotoDetailsModal';
import mockTopics from './mocks/topics';
import mockPhotos from './mocks/photos';
import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isFav, setIsFav] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const toggleFav = (photoId) => {
    if (isFav.includes(photoId)) {
      setIsFav(isFav.filter((id) => id !== photoId));
    } else {
      setIsFav([...isFav, photoId]);
    }
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

return (
  <div className="App">
    <HomeRoute photos={mockPhotos} topics={mockTopics} isFav={isFav} toggleFav={toggleFav} toggleModal={toggleModal}/>
    
  </div>
);
};

export default App;
