import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.isFav.length > 0} topics={props.topics} />
      <PhotoList photos={props.photos} toggleFav={props.toggleFav} isFav={props.isFav} selectPhoto={props.selectPhoto}/>
      
    </div>
  );
};

export default HomeRoute;