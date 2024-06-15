import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';  
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  //Update the TopNavigationBar to so that users can see a notification when at least one photo has been favourited.

  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo" onClick={ () => {props.handleTopicPhotos(null)}}>PhotoLabs</span>
       <TopicList topics={props.topics} handleTopicPhotos={props.handleTopicPhotos}/>
       <FavBadge isFavPhoto={props.isFavPhotoExist }/>
    </div>
    
  );
};

export default TopNavigation;