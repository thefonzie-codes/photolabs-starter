import React from "react";
import useDisplayFavPhotos from "hooks/useDisplayFavPhotos";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import "../styles/MobileNav.scss";
import useApplicationData from "hooks/useApplicationData";

export default function MobileNav({ state, dispatch }) {

  const isFavPhotoExist = Object.values(state.favourites).find(fav => fav === true);

  return (
    <div className="mobile-nav hidden">
      <FontAwesomeIcon onClick={() => useApplicationData()}icon={faHouseChimneyWindow} />
      <FontAwesomeIcon icon={faList} />
      {/* <TopicList topics={state.topics} dispatch={dispatch} /> */}
      <span onClick={() => useDisplayFavPhotos(state, dispatch)}><FavBadge  isFavPhotoExist={isFavPhotoExist}/></span>
    </div>
  )
}