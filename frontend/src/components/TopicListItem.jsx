import React from "react";

import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick= {() => props.handleTopicPhotos(props.topicId)}>
      <span>{props.label}</span>
    </div>
  );
};
export default TopicListItem;
