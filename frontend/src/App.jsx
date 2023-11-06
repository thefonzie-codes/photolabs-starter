import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import { ACTIONS } from 'hooks/reducer';

const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        state={state}
        dispatch={dispatch}
        />
      {state.hidden === false && <PhotoDetailsModal 
        state={state}
        dispatch={dispatch}
        />}
    </div>
  );
};

export default App;
