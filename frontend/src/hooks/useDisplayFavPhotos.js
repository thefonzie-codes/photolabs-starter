import axios from "axios";

export default function useDisplayFavPhotos(state, dispatch) {
  axios
    .get("/api/photos")
    .then(res => res.data)
    .then(photos => photos.filter(photo => Object.keys(state.favourites).includes(photo.id.toString()) && state.favourites[photo.id]))
    .then(favs => dispatch({ type: "SET_PHOTO_DATA", value: favs }));
};