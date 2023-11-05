import { useState } from "react";
import { useReducer } from "react";

import photos from "mocks/photos";
import topics from "mocks/topics";

export default function useApplicationData (){
  const [state, setState] = useState({
    photos, 
    topics, 
    favourites: {1 : false}, 
    hidden: true, 
    selectedPhoto: null, 
    selectedTopic: null
  });
  
  const updateToPhotoFavIds = (id) => {
    let updatedState;
      if (!state.favourites[id]){
        updatedState = {...state, favourites: {...state.favourites, [id] : true}}
      } else {
        updatedState = {...state, favourites: {...state.favourites, [id] : false}}
      }
      setState(updatedState);
    }

    const onClosePhotoDetailsModal = () => setState({...state, hidden : true})

    const setPhotoSelected = (id) => setState({
      ...state, hidden : false, selectedPhoto : id
    })

    const onLoadTopic = (topic) => {
      const updatedState = {...state, selectedTopic: topic}

      setState(updatedState);
    }

    return {
      state,
      updateToPhotoFavIds,
      onClosePhotoDetailsModal,
      setPhotoSelected,
      onLoadTopic,
    }
  }
  
  export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  }
  