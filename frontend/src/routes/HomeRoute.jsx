import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
    const defaultState = [];
    const [isFavorited, setIsFavourited] = useState(defaultState);
    const toggleFavourite = (photo) => {
      // console.log('Type of toggleFavourite:', typeof toggleFavourite);
      if(isFavorited.includes(photo)){
          let newFavourites = [...isFavorited].filter((favouritePhoto) =>  photo !== favouritePhoto)
          setIsFavourited(newFavourites);

      }else{
        setIsFavourited((prev) => 
           [...prev, photo]);

        }
    };
  return (
    <div className="home-route">
      <TopNavigationBar isFavorited={isFavorited} topics={topics}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isFavorited={isFavorited}/>
    </div>
  );
};

export default HomeRoute;