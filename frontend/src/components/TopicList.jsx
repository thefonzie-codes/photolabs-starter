import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, dispatch } = props;

  const createTopicsListComponent = topics.map(topic => {
    const { id, slug, title } = topic;

    return (
      <li key={id}><TopicListItem title={title} id={id} dispatch={dispatch}/></li>
    )
  });

  return (
    <ul className="top-nav-bar__topic-list">
      {createTopicsListComponent}
    </ul>
  );
};

export default TopicList;
