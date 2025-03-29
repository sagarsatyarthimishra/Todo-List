import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TudoList() {
  let [tasks, setTasks] = useState([
    { work: "No-Task assigne!", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  function addTask() {
    console.log("Add a Task");
    setTasks((prevTodos) => {
      return [...prevTodos, { work: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  }

  let UpdateTask = (e) => {
    setNewTask(e.target.value);
  };

  let DeletTask = (id) => {
    setTasks((prevTodos) => tasks.filter((task) => task.id !== id));
  };

  let upperCase = () => {
    setTasks((prevTodos) => {
      return prevTodos.map((task) => {
        return { ...task, isDone: true }; // Toggle isDone status for all tasks
      });
    });
  };

  let upperCaseOne = () => {
    setTasks((prevTodos) => {
      return prevTodos.map((task) => {
        return { ...task, isDone: false }; // Toggle isDone status for all tasks
      });
    });
  };

  // Function to convert the work of a specific task to uppercase
  // This function is commented out as it is not being used in the current implementation

  // let upperCaseOne = (id) => {
  //   setTasks((prevTodos) =>
  //     prevTodos.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, work: task.work.toUpperCase() };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  let Check = (id) => {
    setTasks((prevTodos) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone }; // Toggle isDone status
        }
        return task;
      })
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault(); // Prevent the default behavior of Tab key
      addTask(); // Add task when Enter or Tab is pressed
    }
  };

  return (
    <div>
      <input
        style={{ padding: "5px", borderRadius: "5px", color: "black" }}
        type="text"
        value={newTask}
        placeholder="Add Task"
        onChange={UpdateTask}
        onKeyDown={handleKeyDown} // Call handleKeyDown when a key is pressed
      />
      <br />
      <br />
      <button
        onClick={addTask}
        style={{ backgroundColor: "#5affd5", color: "white" }}
      >
        <i className="fa-solid fa-user-plus"></i>
      </button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h4
        style={{
          backgroundColor: "#14ab41",
          color: "white",
          display: "inline",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        Task Todo
      </h4>
      <ul style={{ listStyleType: "I", width: "100%" }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.isDone ? "line-through" : "none", // Apply line-through when task is done
                cursor: "pointer",
              }}
            >
              {task.work}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => DeletTask(task.id)}
              style={{ backgroundColor: "#5affd5", color: "white" }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              style={{
                fontSize: "30px",
                cursor: "pointer", // Adds a pointer cursor on hover
              }}
              onClick={() => Check(task.id)} // Pass a function to invoke Check(id) on click
            >
              <i className="fa-sharp fa-regular fa-circle-check"></i>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
        ))}
      </ul>
      <br />
      <button
        onClick={upperCase}
        style={{ backgroundColor: "#5affd5", color: "white" }}
      >
        Mark All
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => upperCaseOne(tasks.id)}
        style={{ backgroundColor: "#5affd5", color: "white" }}
      >
        UnMark All
      </button>
    </div>
  );
}
