import UseTask from "../Hooks/UseTask";

function List() {
  const { data, deleteTask, updateTask } = UseTask();

  const handleCheck = (e) => {
    updateTask(e.target.dataset.id, e.target.checked);
  };

  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data._id}>
            <input 
            type="checkbox" 
            checked={data.done}
            data-id={data._id} 
            onChange={handleCheck} 
            />
            {data.task}
            <button onClick={() => deleteTask(data._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
