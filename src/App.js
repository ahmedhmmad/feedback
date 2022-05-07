import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";

import AboutPage from "./pages/AboutPage";

function App() {
  //! State :: Get Data from FeedbackData.js
  const [feedback, setFeedback] = useState(FeedbackData);
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
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStates feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  HandleDelete={DeleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
