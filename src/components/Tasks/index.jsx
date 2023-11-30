import colorArray from "../../assets/colorArray.js";
import TaskCard from "../TaskCard";

export default function Tasks({ taskItems, title, removeTask, colorCheckbox }) {
  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-gray-400 pl-10 md:pl-12 text-sm md:text-lg font-semibold uppercase">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center md:justify-start">
        {taskItems.map((e, i) => (
          <TaskCard
            key={taskItems.indexOf(e)}
            tarea_principal={e.tarea_principal}
            tarea1={e.tarea1}
            tarea2={e.tarea2}
            tarea3={e.tarea3}
            color={colorArray[i + colorCheckbox] || "#c999af"}
            id={e.id}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}
