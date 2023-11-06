import React from "react";
import ModalPhotoListItem from "./ModalPhotoListItem";

export default function ModalPhotoList(props) {
  const {
    state,
    dispatch,
    similarPhotos
  } = props;

  const modalListItems = similarPhotos.map(photo =>
    <ModalPhotoListItem
      photo={photo}
      key={photo.id}
      dispatch={dispatch}
      state={state}
    />
  );

  return (
    <ul className="photo-list">
      {modalListItems}
    </ul>
  );
}