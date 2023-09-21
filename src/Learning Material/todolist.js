import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length + 1,
      taskName: newTask,
      isComplete: false
    }
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId))
  }

  const completeTask = (taskId) => {
    setTodoList(todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: true }
      } else {
        return task
      }
    }))
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task, key) => {
          return <Task
            taskName={task.taskName}
            taskID={task.id}
            taskCompleted={task.isComplete}
            taskDelete={deleteTask}
            taskComplete={completeTask}
          />
        })}
      </div>
    </div>
  );
}

export default App;
