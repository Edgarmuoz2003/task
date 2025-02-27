import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import UseTask from "../Hooks/UseTask";
import Swal from "sweetalert2";

function TaskList() {
  const { message, setMessage, errorMessage, setErrorMessage, createTask } = UseTask();
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  
//funciones para mostrar mensajes de error y exito
  useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
        timer: 3000,
        showConfirmButton: false,
      });
  
      //se agrego este timer para resetear el mensaje de error despues de 3 segundos
      // ya que el mensaje simpre llega igual por lo que el useEfect no re-renderiza
      const timer = setTimeout(() => {
        setErrorMessage(""); 
      }, 3000);
  
      return () => clearTimeout(timer); 
    }
  }, [errorMessage, setErrorMessage]); 
  
  useEffect(() => {
    if (message) {
      Swal.fire({
        icon: "success",
        title: "¡Hecho!",
        text: message,
        timer: 3000,
        showConfirmButton: false,
      });
  
      const timer = setTimeout(() => {
        setMessage(""); 
      }, 3000);
  
      return () => clearTimeout(timer); 
    }
  }, [message, setMessage]); 

  const handleTaskChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task === "") {
      alert("El campo tarea no puede estar vacío");
      return;
    }

    const result = await createTask(task, done);
    if (result) {
      setTask("");
    }
  };

  return (
    <>
      <Card className="main-card">
        <Card.Title className="main-card-title">Lista de Tareas</Card.Title>
        <Card.Body>
          <div className="card-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-lg-8">
                  <label htmlFor="task" style={{ fontWeight: "bold" }}>
                    Agregar Tarea
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task"
                    placeholder="¿Qué necesitas hacer?"
                    value={task}
                    onChange={handleTaskChange}
                  />
                </div>
                <div className="button-div col-lg-4 d-flex align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default TaskList;


