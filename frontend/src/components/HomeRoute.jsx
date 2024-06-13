import React, {useState} from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics}) => {
  //Update the app so that we can keep track of which photos the user has selected as favourites.
  //Consider storing this information in the HomeRoute.
  const [favourites, setFavourites] = useState([]);
  const handleClick = () => {
    setFavourites([...favourites, photo]);
  
  }
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;