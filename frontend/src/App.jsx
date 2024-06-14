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
  const [displayModal, setDisplayModal] = useState(false); //displayModal = false by default setDisplayModal = function to change the value of displayModal


  const toggleFav = (photoId) => {
    if (isFav.includes(photoId)) {
      setIsFav(isFav.filter((id) => id !== photoId));
    } else {
      setIsFav([...isFav, photoId]);
    }
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal); //toggle the value of displayModal to true or false
  };

return (
  <div className="App">
    <HomeRoute photos={mockPhotos} topics={mockTopics} isFav={isFav} toggleFav={toggleFav} toggleModal={toggleModal}/>
    {displayModal && <PhotoDetailsModal toggleModal={toggleModal} />}
  </div>
);
};

export default App;
