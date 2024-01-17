import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';


const TaskForm = ({tasks,setTasks}) => {
  const [task,setTask]=useState({
    id:"",
    name:"",
    status:"todo" //can also be inprogress or closed
  });

  const hadleSubmit=(e)=>{
    e.preventDefault();

    if(task.name.length<3){
      return toast.error("A task must have more then 3 characters"); 
    }

    if(task.name.length>100){
      return toast.error("A task must not more then 100 characters"); 
    }
    setTasks((prev)=>{
      const list=[...tasks, task]
      localStorage.setItem('tasks',JSON.stringify(list))
      return list
    })

    toast.success("Task created successfully")

    setTask({
      id:"",
      name:"",
      status:"todo"
    })
  }

  return (
    <form onSubmit={hadleSubmit}>
      <input value={task.name} onChange={(e)=>{
        setTask({
       ...task,
          id:uuidv4(),
          name:e.target.value
        })
      }} name='title' type="text" placeholder='Enter task' className=' border-2 border-slate-400  bg-slate-100  rounded-md mr-4 h-12 w-64 px-1'/>
      <button className=' bg-cyan-500 rounded-md px-4 h-12 text-white'>Create</button>
    </form>
  )
}

export default TaskForm