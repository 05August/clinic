import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Header = () => {
  const [todosState, setTodoState] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  console.log("editTodo:", editTodo);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses"
        );
        setTodoState(res.data);
      } catch (error) {}
    };
    getTodos();
  }, []);
  const markComplete = async (id, complete, title, img) => {
    try {
      const res = await axios.put(
        `https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses/${id}`,
        {
          id,
          title,
          complete: !complete,
          img,
        }
      );
    } catch (error) {
      console.log("error:", "loi k lay api duoc");
    }
    const demo = async () => {
      try {
        const res1 = await axios.get(
          `https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses/`
        );

        setTodoState(res1.data);
      } catch (error) {
        console.log("error.message:", error.message);
      }
    };
    demo();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses/${id}`
      );

      const newTodos = todosState.filter((item) => {
        return item.id !== id;
      });
      setTodoState(newTodos);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const handleEdit = (id) => {
    console.log("id:", id);
    const findTodo = todosState.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    console.log("findTodo:", findTodo);
  };
  const handleAddTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses",
        {
          title,
          complete: false,
        }
      );
      const newTodos = [...todosState, res.data];
      setTodoState(newTodos);
    } catch (error) {}
  };
  const headerStyles = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };

  return (
    <div style={headerStyles}>
      <Pagination
        todosState={todosState}
        onMarkComplete={markComplete}
        onDelete={handleDelete}
        onAddTodo={handleAddTodo}
        setTodoState={setTodoState}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Header;
