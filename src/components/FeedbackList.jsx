import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, HandleDelete }) {
  console.log(feedback.length);
  if (!feedback || feedback.length === 0) {
    return <div>No feedback found</div>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          //   <FeedbackItem key={item.id} />
          <FeedbackItem key={item.id} item={item} HandleDelete={HandleDelete} />
        );
      })}
    </div>
  );
}

export default FeedbackList;
