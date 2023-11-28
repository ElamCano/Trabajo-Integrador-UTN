import { useState } from "react";
import CheckSquare from "../CheckSquare";

export default function InputSubTask({ task }) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex">
      <div onClick={handleClick}>
        <CheckSquare />
      </div>

      <p
        className={`${checked ? "line-through" : ""} text-black cursor-pointer`}
      >
        {task}
      </p>
    </div>
  );
}
