import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {

 //const photos = [...Array(3)]; //could use this or array.from
 //const photos = Array.from({ length: 3 }); // Array of 3 undefined elements
 //const photoItems = photos.map((photo, index) => (
  {/*<PhotoListItem
    key={index}
    location={sampleDataForPhotoListItem.location}
    imageSource={sampleDataForPhotoListItem.imageSource}
    username={sampleDataForPhotoListItem.username}
    profile={sampleDataForPhotoListItem.profile}
  />
  
));*/}

return (
  <div className="App">
    <TopicList />
    <PhotoList />
    
  </div>
);
};

export default App;
