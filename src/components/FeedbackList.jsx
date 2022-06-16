import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "./../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList({ HandleDelete }) {
  const { isLoading, feedback } = useContext(FeedbackContext);

  console.log(feedback.length);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <div>No feedback found</div>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              HandleDelete={HandleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
