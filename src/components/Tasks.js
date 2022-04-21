import Task from "./Task";
import App from "../App";
//movemos el useState a App.js para usarlo en otros sitios si queremos
// import { useState } from "react";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //añadimos la libreria useState y creamos la constante y la funcion que la va a actualizar. Dentro de useState ponemos el array de valores
  // Movemos el aray de tasks y el useState a App.js
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       text: "Doctor Appointment",
  //       day: "Feb 5th at 2:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Meeting at School",
  //       day: "Mar 12th at 4:30pm",
  //       reminder: false,
  //     },
  //     {
  //       id: 3,
  //       text: "Food Shopping",
  //       day: "Jun 1st at 11:30am",
  //       reminder: true,
  //     },
  //   ])
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
