import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStates() {
  const { feedback } = useContext(FeedbackContext);
  let average = (
    feedback.reduce((acc, feed) => acc + feed.rating, 0) / feedback.length
  ).toFixed(2);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>{isNaN(average) ? 0 : average} Average Rating</h4>
    </div>
  );
}

export default FeedbackStates;
