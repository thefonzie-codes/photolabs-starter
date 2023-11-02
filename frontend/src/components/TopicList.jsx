import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;

  const createTopicsListComponent = topics.map(topic => {
    const { id, slug, title } = topic;

    return <TopicListItem title={title} key={id} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {createTopicsListComponent}
    </div>
  );
};

export default TopicList;
