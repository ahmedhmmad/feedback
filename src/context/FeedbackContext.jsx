import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is Feedback 1",
      rating: 5,
    },
    {
      id: 2,
      text: "This is Feedback 2",
      rating: 6,
    },
    {
      id: 3,
      text: "This is Feedback 3",
      rating: 7,
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

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
        DeleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
