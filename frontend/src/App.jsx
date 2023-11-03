import React, { useState } from 'react';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [photoData, setPhotoData] = useState(0);
  const [hidden, setHidden] = useState(true);

  console.log(hidden, photoData);

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        setHidden={setHidden}
        setPhotoData={setPhotoData}
        />
      <PhotoDetailsModal 
        hidden={hidden} 
        setHidden={setHidden} 
        photoData={photoData}
        photos={photos}
        />
    </div>
  );
};

export default App;
