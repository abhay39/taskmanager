import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks }) => {
  // Ensure tasks is initialized as an array
  const initialTaskState = {
    id: "",
    name: "",
    status: "todo" // can also be in progress or closed
  };
  const [task, setTask] = useState(initialTaskState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3) {
      return toast.error("A task must have more than 3 characters");
    }

    if (task.name.length > 100) {
      return toast.error("A task must not be more than 100 characters");
    }

    setTasks((prevTasks) => {
      // Ensure tasks is initialized as an array
      const updatedTasks = [...(prevTasks || []), task];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    toast.success("Task created successfully");

    // Reset the task state
    setTask(initialTaskState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task.name}
        onChange={(e) => {
          setTask((prevTask) => ({
            ...prevTask,
            id: uuidv4(),
            name: e.target.value
          }));
        }}
        name='title'
        type="text"
        placeholder='Enter task'
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1'
      />
      <button className='bg-cyan-500 rounded-md px-4 h-12 text-white'>Create</button>
    </form>
  );
};

export default TaskForm;
