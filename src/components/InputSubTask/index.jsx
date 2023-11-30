import { useState } from "react";
import CheckSquare from "../CheckSquare";

export default function InputSubTask({ task, color }) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex mt-2" onClick={handleClick}>
      <CheckSquare color={color} checked={checked} size={"checkboxSubTask"} />
      <p
        className={`${
          checked ? "line-through decoration-[3px]" : ""
        } cursor-pointer truncate hover:text-clip whitespace-normal hover:break-words w-[140px] ml-3 font-medium`}
        style={{ textDecorationColor: "#d55b9d", color: color }}
      >
        {task}
      </p>
    </div>
  );
}
