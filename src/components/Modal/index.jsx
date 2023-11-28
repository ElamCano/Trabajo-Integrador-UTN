import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import ButtonAdd from "../ButtonAdd";

export default function Modal({ addTask }) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState({
    fecha: "",
    tarea_principal: "",
    tarea1: "",
    tarea2: "",
    tarea3: "",
  });
  const handleOpen = () => setOpen(!open);
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeOptions = (e) => {
    setTask({ ...task, fecha: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      fecha: "",
      tarea_principal: "",
      tarea1: "",
      tarea2: "",
      tarea3: "",
    });
  };
  return (
    <>
      <div onClick={handleOpen} className="flex justify-center mt-3">
        <ButtonAdd />
      </div>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Crear Tarea
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-12"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-10 " color="gray" variant="lead">
            Puedes crear una tarea principal, añadir subtareas y fechas.
          </Typography>
          <div className="grid gap-2 -mt-6">
            <Select
              label="Seleccione Fecha"
              name="fecha"
              value={task.fecha}
              onChange={handleChangeOptions}
            >
              <Option name="fecha" value="Hoy">
                Hoy
              </Option>
              <Option name="fecha" value="Mañana">
                Mañana
              </Option>
            </Select>
            <Input
              label="Tarea Principal"
              name="tarea_principal"
              value={task.tarea_principal}
              onChange={handleChange}
            />
            <Input
              label="SubTarea 1"
              name="tarea1"
              value={task.tarea1}
              onChange={handleChange}
            />
            <Input
              label="SubTarea 2"
              name="tarea2"
              value={task.tarea2}
              onChange={handleChange}
            />
            <Input
              label="SubTarea 3"
              name="tarea3"
              value={task.tarea3}
              onChange={handleChange}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2 -mt-6">
          <Button
            className="py-[13px]"
            variant="text"
            color="gray"
            onClick={handleOpen}
          >
            cancelar
          </Button>
          <form onSubmit={handleSubmit}>
            <button
              type="sumbit"
              className="px-4 py-2 rounded-lg text-[#f5f5f5] bg-[#4ac2c3] hover:bg-[#f5f5f5] hover:border hover:border-[#4ac2c3] hover:text-[#4ac2c3] transition duration-500"
              onClick={handleOpen}
            >
              crear tarea
            </button>
          </form>
        </DialogFooter>
      </Dialog>
    </>
  );
}
