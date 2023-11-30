import { useState } from "react";
import InputSubTask from "../InputSubTask";
import CheckSquare from "../CheckSquare";

export default function TaskCard({
  tarea_principal,
  tarea1,
  tarea2,
  tarea3,
  color,
  id,
  removeTask,
}) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  const handleRemove = () => {
    removeTask(id);
  };
  /* Efecto de hover y aparece la cruz para remover tarea */
  const aparecerCruz = () => {
    setTimeout(() => {
      document.getElementById(id).className = "w-6 cursor-pointer visible";
    }, 100);
  };
  const desaparecerCruz = () => {
    setTimeout(() => {
      document.getElementById(id).className = "w-6 cursor-pointer invisible";
    }, 100);
  };

  return (
    <div
      className="bg-[#f5f5f5] p-3 w-[320px] md:w-[290px] h-full md:min-h-[160px] rounded-md flex flex-col ml-0 md:ml-[44px] mt-2 md:mt-6"
      onMouseOver={aparecerCruz}
      onMouseOut={desaparecerCruz}
    >
      <div className="flex justify-between mt-1">
        <div className="flex  cursor-pointer" onClick={handleClick}>
          <CheckSquare
            checked={checked}
            color={color}
            size={"checkboxPrincipal"}
          />
          <p
            className={`${
              checked ? "line-through decoration-[3px]" : ""
            }  truncate hover:text-clip whitespace-normal hover:break-words w-[180px] ml-3 font-medium`}
            style={{ textDecorationColor: "#d55b9d", color: color }}
          >
            {tarea_principal}
          </p>
        </div>
        <div className="h-6">
          <img
            src="/cross.svg"
            alt="cross"
            id={id}
            className="w-6 h-6 cursor-pointer invisible hover:visible"
            onClick={handleRemove}
          />
        </div>
      </div>
      <div className="flex flex-col ml-10">
        {tarea1 && <InputSubTask task={tarea1} color={color} />}
        {tarea2 && <InputSubTask task={tarea2} color={color} />}
        {tarea3 && <InputSubTask task={tarea3} color={color} />}
      </div>
    </div>
  );
}
