import { useState } from "react";
import InputSubTask from "../InputSubTask";
import CheckSquare from "../CheckSquare";

export default function TaskCard({
  fecha,
  tarea_principal,
  tarea1,
  tarea2,
  tarea3,
}) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <div className="bg-[#f5f5f5] w-[250px] min-h-[100px] rounded-md flex flex-col">
      <div className="flex justify-between">
        <div className="flex cursor-pointer" onClick={handleClick}>
          <CheckSquare />
          <p className={`${checked ? "line-through" : ""} text-black`}>
            {tarea_principal}
          </p>
        </div>
        <img src="/cross.svg" alt="cross" className="w-6" />
      </div>
      <div className="flex flex-col ml-6 bg-red-300">
        {tarea1 && <InputSubTask task={tarea1} />}
        {tarea2 && <InputSubTask task={tarea2} />}
        {tarea3 && <InputSubTask task={tarea3} />}
      </div>
    </div>
  );
}
