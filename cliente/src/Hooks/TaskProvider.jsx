import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";
import axios from "axios";
import PropTypes from "prop-types";


function TaskProvider({ children }) {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getTasks = async () => {//moví esta función afuera del useEffect para poder llamarla desde el createTask
    try {
      const response = await axios.get("http://localhost:4000/api/get");
      setData(response.data || []);
    } catch (error) {
      setErrorMessage("Error de conexión");
      console.error(error);
    }
  };

  const createTask = async (task, done) => {
    try {
        const response = await axios.post("http://localhost:4000/api/create", { task, done });
    if (response.status === 200) {
        setMessage(response.data.message);
        setErrorMessage("null");
    }
    getTasks();//este llamado es para que se actualice la lista de tareas cuando se crea una nueva.
    return true
    } catch (error) {
        if (error.response.data.message) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage("Error de conexión");
        }
        return false
    }
    
}

const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:4000/api/delete/${id}`);
        if (response.status === 200) {
            setMessage(response.data.message);
            setErrorMessage("null");
        }
        getTasks();
        return true
    } catch (error) {
        if (error.response.data.message) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage("Error de conexión");
        }
        return false
    }
}

const updateTask = async (id, done) => {
  try {
    const response = await axios.patch(`http://localhost:4000/api/update/${id}`, { done });
    if (response.status === 200) {
      setMessage(response.data.message);
      setErrorMessage("null");
    }
    getTasks();
    return true;
  } catch (error) {
    if (error.response.data.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage("Error de conexión");
    }
    return false;
  }
}




  useEffect(() => {
    getTasks();//lo ´puse para que se ejecute al cargar la página
  }, []); //no puse nada en el array porque cuando coloque "data" para que renderizara al cambiar, se creaba un bucle infinito.




  return (
    <TaskContext.Provider value={{ message, setErrorMessage, errorMessage,setMessage, createTask, data, setData, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;