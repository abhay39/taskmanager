
import './App.css';
import { useEffect, useState } from 'react';
import TaskForm from './component/TaskForm/TaskForm';
import TaskList from './component/TaskList/TaskList';
import  { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [tasks,setTasks]=useState([]);


  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem('tasks')));
  },[])

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className=" bg-slate-100 min-h-screen flex flex-col items-center pt-32 gap-16">
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
