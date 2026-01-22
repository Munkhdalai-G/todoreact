"use client";
import { useState } from "react";
import Button from "./button";
import OnAdd from "./onAdd";
import Process from "./process";
import ClearButton from "./clearButton";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return <CSS />;
}

const CSS = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todo.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const onAddTodo = () => {
    if (!value.trim()) return;

    const newTodo = {
      id: todo.length + 1,
      text: value,
      isCompleted: false,
    };

    setTodo((prev) => [...prev, newTodo]);
    setValue("");
  };

  const onToggleCheck = (todoId) => {
    const newTodos = todo.map((task) =>
      task.id === todoId ? { ...task, isCompleted: !task.isCompleted } : task,
    );
    setTodo(newTodos);
  };

  const onDelete = (todoId) => {
    setTodo(todo.filter((task) => task.id !== todoId));
  };

  const onClearCompleted = () => {
    setTodo(todo.filter((task) => !task.isCompleted));
  };

  return (
    <div className="pt-40 flex justify-center">
      <div className="w-100 rounded-md shadow-2xl pl-10 pb-5 pt-10 pr-10 flex flex-col ">
        <Header />
        <OnAdd
          value={value}
          handleInputChange={handleInputChange}
          onAddTodo={onAddTodo}
        />
        <Button filter={filter} setFilter={setFilter} />
        <Process
          onToggleCheck={onToggleCheck}
          onDelete={onDelete}
          filteredTodos={filteredTodos}
        />
        <ClearButton onClearCompleted={onClearCompleted} todo={todo} />
        <Footer />
      </div>
    </div>
  );
};
