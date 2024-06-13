import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics}) => {
  //Update the app so that we can keep track of which photos the user has selected as favourites.
  //Consider storing this information in the HomeRoute.
  const toggleFav = (photoId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };
  return (
    <div className="home-route">
      <TopNavigationBar favourites={favourites} topics={topics}/>
      <PhotoList photos={photos} toggleFav={toggleFav} favourites={favourites}/>
    </div>
  );
};

export default HomeRoute;