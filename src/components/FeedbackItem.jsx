import Card from "./shared/Card";
import { useState } from "react";

function FeedbackItem({ item }) {
  const [reverse, setReverse] = useState(false);
  const reverseHandler = () => {
    setReverse(!reverse);
  };

  return (
    <div>
      <Card reverse={reverse}>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
      </Card>
      <button onClick={reverseHandler}>Reverse</button>
    </div>
  );
}

export default FeedbackItem;
