import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";
import axios from "axios";
import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_API_PORT;
const baseURL = `${apiUrl}:${apiPort}/api`;



function TaskProvider({ children }) {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getTasks = async () => {
    try {
      const response = await axios.get(`${baseURL}/get`);
      setData(response.data || []);
    } catch (error) {
      setErrorMessage("Error de conexión");
      console.error(error);
    }
  };

  const createTask = async (task, done) => {
    try {
      const response = await axios.post(`${baseURL}/create`, { task, done });
      if (response.status === 200) {
        setMessage(response.data.message);
        setErrorMessage("null");
      }
      getTasks();
      return true;
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error de conexión");
      return false;
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`${baseURL}/delete/${id}`);
      if (response.status === 200) {
        setMessage(response.data.message);
        setErrorMessage("null");
      }
      getTasks();
      return true;
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error de conexión");
      return false;
    }
  };

  const updateTask = async (id, done) => {
    try {
      const response = await axios.patch(`${baseURL}/update/${id}`, { done });
      if (response.status === 200) {
        setMessage(response.data.message);
        setErrorMessage("null");
      }
      getTasks();
      return true;
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error de conexión");
      return false;
    }
  };




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