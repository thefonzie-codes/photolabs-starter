import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, dispatch, ACTIONS }) => {

  const createTopicsListComponent = topics.map(topic => {
    const { id, title } = topic;

    return (
      <li key={id}><TopicListItem title={title} id={id} dispatch={dispatch} ACTIONS={ACTIONS} /></li>
    )
  });

  return (
    <ul className="top-nav-bar__topic-list">
      {createTopicsListComponent}
    </ul>
  );
};

export default TopicList;
