import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <a href={props.slug}>
        <span>{props.label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
