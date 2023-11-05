import { useReducer } from "react";
import { reducer } from "./reducer";

import photos from "mocks/photos";
import topics from "mocks/topics";

export default function useApplicationData (){
  const [state, dispatch] = useReducer(reducer, {
    photos, 
    topics, 
    favourites: {1 : false}, 
    hidden: true, 
    selectedPhoto: null, 
    selectedTopic: null
  });

    return {
      state,
      dispatch
    }
  }