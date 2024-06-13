import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar'; 
import  '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [isFav, setIsFav] = useState([]);
  const toggleFav = (id) => {
    isFav[id] !== undefined ? setIsFav({...isFav, [id]: !isFav[id]}) : setIsFav({...isFav, [id]: true});
    
  }  
  return (
    <div className="home-route">
      <TopNavigationBar isFav={Object.values(isFav).includes(true)} topics={props.topics}/>
      <PhotoList photos={props.photos} toggleFav={toggleFav} isFav={isFav}/>
      
    </div>
  );
};

export default HomeRoute;