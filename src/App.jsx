import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [itemsToday, setItemsToday] = useState([]);
  const [itemsTomorrow, setItemsTomorrow] = useState([]);

  const addTask = (task) => {
    const newTask = {
      fecha: task.fecha,
      tarea_principal: task.tarea_principal,
      tarea1: task.tarea1,
      tarea2: task.tarea2,
      tarea3: task.tarea3,
      checked: false,
    };

    if (newTask.fecha === "Hoy") setItemsToday([...itemsToday, newTask]);
    else setItemsTomorrow([...itemsTomorrow, newTask]);
    setToDoList([...toDoList, newTask]);
  };
  return (
    <div className="bg-[#1c2628] h-screen w-full">
      <Title addTask={addTask} />
      {itemsToday.length && <Tasks title={"Hoy"} taskItems={itemsToday} />}
      {itemsTomorrow.length && (
        <Tasks title={"Mañana"} taskItems={itemsTomorrow} />
      )}
    </div>
  );
}

export default App;
