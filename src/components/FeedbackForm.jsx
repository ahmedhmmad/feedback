import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import SelectedFeedback from "./SelectedFeedback";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value.length >= 10) {
      setDisabled(false);
      setMessage("");
      setText(e.target.value);
    } else {
      setDisabled(true);
      setMessage("Please enter at least 10 characters");
    }
  };
  return (
    <Card>
      <h3>How would You like to Rate our Service?</h3>
      <SelectedFeedback />
      <form>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write Your Review"
            onChange={handleTextChange}
          />
          <Button isDisabled={isDisabled} type="submit" version="secondary">
            Submit
          </Button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
