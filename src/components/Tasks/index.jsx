import TaskCard from "../TaskCard";

export default function Tasks({ taskItems, title }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-gray-400">{title}</h3>
      <div className="flex flex-wrap bg-red-200 gap-8 pl-8">
        {taskItems.map((e) => (
          <TaskCard
            fecha={e.fecha}
            key={taskItems.indexOf(e)}
            tarea_principal={e.tarea_principal}
            tarea1={e.tarea1}
            tarea2={e.tarea2}
            tarea3={e.tarea3}
          />
        ))}
      </div>
    </div>
  );
}
