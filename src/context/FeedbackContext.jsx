import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "lorem10  ipsum",
      rating: 10,
    },
  ]);
  const DeleteFeedback = (id) => {
    if (window.confirm("Are You Sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
    console.log(newFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, setFeedback, DeleteFeedback, addFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
