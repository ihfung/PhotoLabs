import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';  
import FavBadge from './FavBadge';

const TopNavigation = ({topics, isFav}) => {
  //Update the TopNavigationBar to so that users can see a notification when at least one photo has been favourited.
  
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">PhotoLabs</span>
       <TopicList topics={topics}/>
       {<FavBadge isFav={isFav}/>}
    </div>
    
  );
};

export default TopNavigation;