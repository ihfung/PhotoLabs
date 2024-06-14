import React, {useState} from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import PhotoList from './components/PhotoList';
//import TopNavigationBar from './components/TopNavigationBar';   
import HomeRoute from './routes/HomeRoute';
import mockTopics from './mocks/topics';
import mockPhotos from './mocks/photos';
import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isFav, setIsFav] = useState([]);
  
  const toggleFav = (photoId) => {
    if (isFav.includes(photoId)) {
      setIsFav(isFav.filter((id) => id !== photoId));
    } else {
      setIsFav([...isFav, photoId]);
    }
  };

return (
  <div className="App">
    <HomeRoute photos={mockPhotos} topics={mockTopics} isFav={isFav} toggleFav={toggleFav}/>
    
  </div>
);
};

export default App;
