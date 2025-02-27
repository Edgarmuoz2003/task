import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";
import axios from "axios";
import PropTypes from "prop-types";


function TaskProvider({ children }) {
//   const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
  }, []);

  const createTask = async (task, done) => {
    try {
        const response = await axios.post("http://localhost:4000/api/create", { task, done });
    if (response.status === 200) {
        setMessage(response.data.message);
        setErrorMessage("null");
    }
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



  return (
    <TaskContext.Provider value={{ message, setErrorMessage, errorMessage,setMessage, createTask }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;