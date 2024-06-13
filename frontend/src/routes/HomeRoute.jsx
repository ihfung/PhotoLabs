import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics, toggleFav}) => {
  //Update the app so that we can keep track of which photos the user has selected as favourites.
  //Consider storing this information in the HomeRoute.
  const [favourites, setFavourites] = useState([]);
  const handleClick = () => {
    setFavourites([...favourites, photo]);
  
  }
  return (
    <div className="home-route">
      <TopNavigationBar favourites={favourites} topics={topics}/>
      <PhotoList photos={photos} toggleFav={toggleFav}/>
    </div>
  );
};

export default HomeRoute;