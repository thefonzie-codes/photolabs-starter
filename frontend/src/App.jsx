import React, { useState } from 'react';
import './App.scss';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [hidden, setHidden] = useState(true);

  console.log(hidden);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} hidden={hidden} setHidden={setHidden}/>
      <PhotoDetailsModal hidden={hidden} setHidden={setHidden}/>
    </div>
  );
};

export default App;
