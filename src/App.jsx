import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "@material-tailwind/react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [itemsToday, setItemsToday] = useState([]);
  const [itemsTomorrow, setItemsTomorrow] = useState([]);
  const [alertaCreada, setAlertaCreada] = useState(false);
  const [alertaEliminada, setAlertaEliminada] = useState(false);

  const idUnico = uuidv4();

  const addTask = (task) => {
    const newTask = {
      fecha: task.fecha,
      tarea_principal: task.tarea_principal,
      tarea1: task.tarea1,
      tarea2: task.tarea2,
      tarea3: task.tarea3,
      id: idUnico,
    };
    if (newTask.fecha === "Today") setItemsToday([...itemsToday, newTask]);
    else setItemsTomorrow([...itemsTomorrow, newTask]);
    setToDoList([...toDoList, newTask]);
    setAlertaCreada(!alertaCreada);
    setTimeout(() => {
      setAlertaCreada(false);
    }, 2000);
  };
  const removeTask = (id) => {
    const newList = toDoList.filter((e) => e.id === id);
    const newListToday = itemsToday.filter((e) => e.id !== id);
    const newListTomorrow = itemsTomorrow.filter((e) => e.id !== id);
    setToDoList(newList);
    setItemsToday(newListToday);
    setItemsTomorrow(newListTomorrow);
    setAlertaEliminada(!alertaEliminada);
    setTimeout(() => {
      setAlertaEliminada(false);
    }, 2000);
  };
  return (
    <div className="bg-[#1c2628] min-h-screen w-full pb-24 md:pb-4">
      <Title addTask={addTask} />
      {itemsToday.length && (
        <Tasks
          title={"Today"}
          taskItems={itemsToday}
          removeTask={removeTask}
          colorCheckbox={0}
        />
      )}
      {itemsTomorrow.length && (
        <Tasks
          title={"Tomorrow"}
          taskItems={itemsTomorrow}
          removeTask={removeTask}
          colorCheckbox={2}
        />
      )}
      {alertaCreada && (
        <Alert color="green" className="absolute bottom-0 w-full md:w-80">
          Se creó la tarea correctamente
        </Alert>
      )}
      {alertaEliminada && (
        <Alert color="red" className="absolute bottom-0 w-full md:w-96">
          Se eliminó la tarea correctamente
        </Alert>
      )}
    </div>
  );
}

export default App;
