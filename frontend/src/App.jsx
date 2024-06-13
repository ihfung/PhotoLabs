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
const [isFavorited, setIsFavourited] = useState([]);
const toggleFavourite = (photo) => {
    if (isFavorited.includes(photo)) {
      let newFavourites = [...isFavorited].filter((favouritePhoto) => photo !== favouritePhoto);
      setIsFavourited(newFavourites);
    } else {
      setIsFavourited((prev) => [...prev, photo]);
    }
  };

return (
  <div className="App">
    <HomeRoute isFavourited={isFavourited} toggleFavourite={toggleFavourite} photos={mockPhotos} topics={mockTopics}/>
    
  </div>
);
};

export default App;
