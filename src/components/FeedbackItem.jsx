import Card from "./shared/Card";
import { useState, useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { DeleteFeedback, editFeedback } = useContext(FeedbackContext);
  const [reverse, setReverse] = useState(false);
  const reverseHandler = () => {
    setReverse(!reverse);
  };
  //   const HandleDelete = (id) => {
  //     console.log(id + "deleted");
  //   };
  return (
    <div>
      <Card reverse={reverse}>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button
          onClick={() => {
            DeleteFeedback(item.id);
          }}
          className="close"
        >
          <FaTimes color="purple" />
        </button>
        <button
          onClick={() => {
            editFeedback(item);
          }}
          className="edit"
        >
          <FaEdit color="purple" />
        </button>
      </Card>
      <button className="btn btn-secondary" onClick={reverseHandler}>
        Reverse
      </button>
    </div>
  );
}

export default FeedbackItem;
