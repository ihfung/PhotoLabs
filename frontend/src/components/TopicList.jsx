import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

const sampleDataForTopicList = topics;

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {sampleDataForTopicList.map((topic) => (
       <TopicListItem key={topic.id} slug={topic.slug} label={topic.title} />))}
    </div>
  );
};

export default TopicList;
