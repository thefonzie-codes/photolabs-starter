import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

export default function App (){
  const { state, dispatch } = useApplicationData();

  console.log(state);

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
