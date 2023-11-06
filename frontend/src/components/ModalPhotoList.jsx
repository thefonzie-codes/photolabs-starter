import React from "react";
import ModalPhotoListItem from "./ModalPhotoListItem";
import PhotoListItem from "./PhotoListItem";

export default function ModalPhotoList(props) {
  const {
    state,
    dispatch,
    similarPhotos
  } = props;

  const modalListItems = similarPhotos.map(photo =>
    <PhotoListItem
      photo={photo}
      key={photo.id}
      dispatch={dispatch}
      state={state}
    />
  );

  return (
    <div className="photo-details-modal__images">
      {modalListItems}
    </div>
  );
}