import { useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import axios from 'axios'

export default function useApplicationData() {

  const initialState = {
    photos: [],
    topics: [],
    favourites: [],
    hidden: true,
    selectedPhoto: null,
    selectedTopic: null
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getPhotos = axios.get("/api/photos")
      .then(res => res.data)
      .then(data => dispatch({ type: "SET_PHOTO_DATA", value: data }))
      .catch(error => console.error(error))

    const getTopics = axios.get("/api/topics")
      .then(res => res.data)
      .then(data => dispatch({ type: "SET_TOPIC_DATA", value: data }))
      .catch(error => console.error(error))

    const getFavourites = axios.get("/api/favourites")
      .then(res => res.data)
      .then(data => data.map(data => ({[data.photo_id]: data.is_fav})))
      .then(favs => dispatch({ type: "SET_FAVOURITES_DATA", value: favs }))
      .catch(error => console.error(error))

    Promise.all([getPhotos, getTopics, getFavourites])
  }, [])
  
  return {
    state,
    dispatch
  }
}