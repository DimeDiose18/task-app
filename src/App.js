import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="task-app">
     <div className='main-task-list'>
     <h1>My Tasks</h1>
     <ToDoList />
     </div>
    </div>
  );
}

export default App;
