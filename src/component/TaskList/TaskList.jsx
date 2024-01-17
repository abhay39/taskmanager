import React, { useEffect, useState } from "react";
import CategoryLists from "../Category/CategoryLists";

const TaskList = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(
    () => {
      setTodos(tasks.filter(task => task.status === "todo"));
      setInProgress(tasks.filter(task => task.status === "inprogress"));
      setCompleted(tasks.filter(task => task.status === "completed"));
    },
    [tasks]
  );

  const status = ["todo", "inprogress", "completed"];

  return (
    <div className=" flex gap-16">
      {status.map((status, index) => {
        return (
          <div key={index}>
            <CategoryLists
              status={status}
              tasks={tasks}
              setTasks={setTasks}
              todos={todos}
              inProgress={inprogress}
              completed={completed}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
