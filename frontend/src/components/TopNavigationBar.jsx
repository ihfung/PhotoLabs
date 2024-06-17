import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';  
import FavBadge from './FavBadge';
import PhotoList from './PhotoList';

const TopNavigation = (props) => {
  //Update the TopNavigationBar to so that users can see a notification when at least one photo has been favourited.
  
  //logo click handler to refresh the page
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleLogoClick}>PhotoLabs</span>
       <TopicList topics={props.topics} handleTopicPhotos={props.handleTopicPhotos}/>
       <FavBadge isFavPhoto={props.isFavPhotoExist }/>
    </div>
    
  );
};

export default TopNavigation;