import React from "react";

function SelectedFeedback({ select }) {
  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };
  const [selected, setSelected] = React.useState(0);
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i + 1}>
          <input
            type="radio"
            value={i + 1}
            name=""
            id={`num-${i + 1}`}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default SelectedFeedback;
