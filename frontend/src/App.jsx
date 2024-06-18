import React, { useState } from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss'; // or './App.css'

const App = () => {
  const {
    isFav,
    selectedPhoto,
    toggleFav,
    toggleModal,
    handleSelectPhoto,
    handleTopicPhotos,
    photoData,
    topicData
  } = useApplicationData();

  const [darkMode, setDarkMode] = useState(false);

  const dark = () => setDarkMode(!darkMode);
  
  const darkModeClass = darkMode ? 'dark' : '';

  
  return (
    
    <div className={`App ${darkModeClass}`}>
      
      <HomeRoute
        dark={dark}
        photos={photoData}
        topics={topicData}
        handleTopicPhotos={handleTopicPhotos}
        isFav={isFav}
        toggleFav={toggleFav}
        toggleModal={toggleModal}
        selectPhoto={handleSelectPhoto}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          dark={dark}
          toggleModal={toggleModal}
          selectPhoto={selectedPhoto}
          selectedPhotoGroup={Object.values(selectedPhoto.similar_photos)}
          isFav={isFav}
          toggleFav={toggleFav}
        />
      
      )}
      
    </div>
  );
};

export default App;
