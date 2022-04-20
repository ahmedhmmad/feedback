import React from "react";
import FeedbackItem from "./FeedbackItem";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
=======
>>>>>>> main

function FeedbackList({ feedback, HandleDelete }) {
  console.log(feedback.length);
  if (!feedback || feedback.length === 0) {
    return <div>No feedback found</div>;
  }
  return (
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
