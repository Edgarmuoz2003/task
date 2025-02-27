import './App.css'
import TaskList from './components/taskList'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskProvider from './Hooks/TaskProvider';


function App() {


  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
    
  )
}

export default App
