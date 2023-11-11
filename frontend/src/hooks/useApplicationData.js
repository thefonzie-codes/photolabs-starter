import { useReducer } from "react";
import { reducer } from "./reducer";
import { useEffect } from "react";

export default function useApplicationData() {

  const initialState = {
    photos: [],
    topics: [],
    favourites: {},
    hidden: true,
    selectedPhoto: null,
    selectedTopic: null
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", value: data }))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch("/api/topics")
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TOPIC_DATA", value: data }))
      .catch(err = console.error(err))
  }, [])
  
  return {
    state,
    dispatch
  }
}