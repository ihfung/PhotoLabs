import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = (topics, photos, isFavorited, toggleFavourite) => {
    
  return (
    <div className="home-route">
      <TopNavigationBar isFavorited={isFavorited} topics={topics}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isFavorited={isFavorited}/>
    </div>
  );
};

export default HomeRoute;