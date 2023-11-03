import React, { useState } from 'react';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
      <PhotoDetailsModal hidden={hidden}/>
    </div>
  );
};

export default App;
