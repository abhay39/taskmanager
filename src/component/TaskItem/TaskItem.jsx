import React from 'react'
import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';

const TaskItem = ({task,tasks,setTasks}) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item:{id:task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  // console.log(isDragging)

  const handleRemove=(id)=>{
    console.log(id)

    const fTaska=tasks.filter((t)=>t.id!==id);
    localStorage.setItem('tasks', JSON.stringify(fTaska))
    setTasks(fTaska);
    toast("Task removed successfully",{
      icon:'😢'
    })
  }

  return (
    <div ref={drag} className={` relative p-4 mt-8 shadow-md rounded-md ${isDragging ? " opacity-25" :"opacity-100"} cursor-grab select-none`}>
      <p>{task.name}</p>
      <button onClick={()=>{
        handleRemove(task.id)
      }} className=' absolute bottom-1 right-1 text-slate-400'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
    </div>
  )
}

export default TaskItem