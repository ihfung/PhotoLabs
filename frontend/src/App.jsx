import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import PhotoList from './components/PhotoList';
//import TopNavigationBar from './components/TopNavigationBar';   
import HomeRoute from './routes/HomeRoute';
import mockTopics from './mocks/topics';
import mockPhotos from './mocks/photos';
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
    <HomeRoute photos={mockPhotos} topics={mockTopics}/>
    
  </div>
);
};

export default App;
