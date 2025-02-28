import './App.css'
import TaskList from './components/taskList'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskProvider from './Hooks/TaskProvider';
import List from './components/List';


function App() {


  return (
    <TaskProvider>
      <TaskList />
      <List />
    </TaskProvider>
    
  )
}

export default App
