import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./Context/TodoContext1";
import { TodoForm, TodoItems,Footer } from "./Components";
import Navbar from "./Components/Navbar";

function App() {
  {
    /*to store todos from the context we are making todos state this todo is same as contex provider*/
  }
  {
    /*here todos is an array*/
  }

  const [todos, setTodos] = useState([]);

  {
    /*Defining functionalities here from the context function should of the same name*/
  }
  {
    /*here todo come from the fom*/
  }

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  {
    /*here todo come from the fom*/
  }

  const updateTodo = (id, todo) => {
    {
      /*here eachVal is just a variable name for prev state in map */
    }

    setTodos((prev) =>
      prev.map((eachVal) => (eachVal.id === id ? todo : eachVal))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    {
      /*here {...prevTodo represent all the values inside the todo and , completed changes if toggling}*/
    }
    {
      /*study read me */
    }

    {
      /*{...prevTodo}: This copies all properties of the prevTodo object into a new object. It's a way to create a shallow copy of prevTodo.
    completed: !prevTodo.completed: This overrides the completed property of the copied object with its negation. If prevTodo.completed is true, it will become false, and vice versa.*/
    }
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    {
      /*useEffect used for localStorage */
    }

    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleCompleted, updateTodo }}
    >
      <Navbar/>
      <div className="bg-[#172842] min-h-screen py-16 mx-[-38px] px-[38px] ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 font-serif">

            "Plan Your Day "
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </TodoProvider>
  );
}

export default App;
