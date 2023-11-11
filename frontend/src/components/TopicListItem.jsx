import React from "react";
import "../styles/TopicListItem.scss";

export default function TopicListItem ({ id, title, dispatch }) {

  const getPhotoByTopicId = (id) => {
    fetch(`/api/topics/photos/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", value: data }))
  }

  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotoByTopicId(id)} className="topic-list__item span">
        {title}
      </span>
    </div>
  );
};

