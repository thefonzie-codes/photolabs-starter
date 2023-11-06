import React from "react";
import PhotoListItem from "./PhotoListItem";

export default function ModalPhotoList({ state, dispatch, similarPhotos }) {

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