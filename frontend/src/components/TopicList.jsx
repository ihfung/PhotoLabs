import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


//const sampleDataForTopicList = topics;

const TopicList = (props) => {
  
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
       <TopicListItem key={topic.id} slug={topic.slug} label={topic.title} />))}
    </div>
  );
};

export default TopicList;
