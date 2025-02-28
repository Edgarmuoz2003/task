import UseTask from "../Hooks/UseTask";
import { useState } from "react";

function List() {
  const { data, deleteTask, updateTask } = UseTask();

  //hooks y estados para paginación
  const [currentPage, setCurrentPage] = useState(1); //inicializo la pagina actual

  const tasksPerPage = 5; //cantidad de tareas por pagina
  const totalPages = Math.ceil(data.length / tasksPerPage); //calcular la cantidad de paginas

  //calcular indice de las tareas para poder dividir el array en grupos de 5
  const indexLastTask = currentPage * tasksPerPage; //indice de la ultima tarea es igual a actual * tareas por pagina
  const indexFirstTask = indexLastTask - tasksPerPage; //indice de la primera tarea es igual a la ultima tarea - tareas por pagina

  //dividimos el array de tareas en grupos de 5
  const currentTasks = data.slice(indexFirstTask, indexLastTask); //

  const handleCheck = (e) => {
    updateTask(e.target.dataset.id, e.target.checked);
  };

  return (
    <>
      {/* lista de tareas */}
      <ul className="list-group mt-3 ">
        {currentTasks.map((data) => (
          <li
            key={data._id}
            className="list-group-item d-flex justify-content-between align-items-center "
          >
            <input
              type="checkbox"
              checked={data.done}
              data-id={data._id}
              onChange={handleCheck}
            />
            <div
              style={{ textDecoration: data.done ? "line-through" : "none" }}
            >
              {data.task}
            </div>

            {data.done ? (
              <span style={{color: "green"}}> Tarea Completada</span>
            ) : (
              <span> Tarea Pendiente </span>
            )}
            <button
              onClick={() => deleteTask(data._id)}
              className="btn btn-link p-0 border-0 text-danger"
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </li>
        ))}
      </ul>

      {/* Paginación */}
      <div className="d-flex justify-content-center mt-5">
        <button 
        className="btn btn-link p-0 border-0 "
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1} //deshabilito el boton si la pagina actual es 1
        >
          <i className="bi bi-arrow-left"></i>Anterior
        </button>

        <span className="m-5">Pagina {currentPage} de {totalPages}</span>

        <button
          className="btn btn-link p-0 border-0"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexLastTask >= data.length} //si la cantidad de tareas es menor a 5 quiere decir que no hay mas tareas que mostrar
        >
          Siguiente<i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default List;
