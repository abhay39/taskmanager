import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { useDrop } from 'react-dnd'
import toast from 'react-hot-toast'

const CategoryLists = ({status,tasks,setTasks,todos,inProgress,completed}) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop:(item)=>addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  let text="To-do"
  let bg="bg-slate-500"
  let tasksToMap=todos;

  if(status==="inprogress"){
    text="in progress"
    bg="bg-purple-500"
    tasksToMap=inProgress;
  }

  if(status==="completed"){
    text="Completed"
    bg="bg-green-500"
    tasksToMap=completed;
  }


  const addItemToSection=(id)=>{
    // console.log("Dropped",id,status)
    setTasks((prev)=>{
      const mTask=prev.map(t=>{
        if(t.id===id){
          return {
         ...t,
            status:status
          }
        }
        return t
      })
      localStorage.setItem('tasks', JSON.stringify(mTask))
      toast("Task status updated",{
        icon:"😊"
      })
      return mTask;
    })
  }

  return (
    <div className={` w-64 rounded-md p-2 ${isOver?"bg-slate-200":""}`} ref={drop}>
      <Header text={text} bg={bg} count={tasksToMap?.length}/> 
      {
        tasksToMap?.length >0 && (
          tasksToMap?.map((task, index) => {
            return (
              <div key={index}>
                <TaskItem task={task} tasks={tasks} key={task.id} setTasks={setTasks} />
              </div>
            );
          })
        )
      }
    </div>
    
  )
}

export default CategoryLists

const Header=({text,bg,count})=>{
  return (
    <div className={`${bg} uppercase text-sm text-white flex rounded-md items-center h-12 pl-4`} >
      {text}
      <div className='ml-2 bg-white rounded-full w-5 h-5 text-black flex items-center justify-center'>
        {count}
      </div>
    </div>
  )
}