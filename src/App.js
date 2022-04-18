import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  //! State :: Get Data from FeedbackData.js
  const [feedback, setFeedback] = useState(FeedbackData);
  const DeleteFeedback = (id) => {
    if (window.confirm("Are You Sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="App">
      <Header text="Hello from Props" />
      <div className="container">
        <FeedbackList feedback={feedback} HandleDelete={DeleteFeedback} />
      </div>
    </div>
  );
}

export default App;
