import { useReducer } from "react";
import { reducer } from "./reducer";
import { useEffect } from "react";
import axios from 'axios'

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
    axios.get("/api/photos")
      .then(res => res.data)
      .then(data => dispatch({ type: "SET_PHOTO_DATA", value: data }))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
  axios.get("/api/topics")
      .then(res => res.data)
      .then(data => dispatch({ type: "SET_TOPIC_DATA", value: data }))
      .catch(error => console.error(error))
  }, [])
  
  return {
    state,
    dispatch
  }
}