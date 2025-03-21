import { useState } from "react";

const todoList = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: true },
  { id: 3, title: "Finish React project", completed: false },
  { id: 4, title: "Read a book", completed: true },
  { id: 5, title: "Call Mom", completed: false },
];

export default function Todo() {
  const [todolistItem, setTodoListItem] = useState(todoList);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newEntry = {
      id: todolistItem.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodoListItem([...todolistItem, newEntry]);
    setNewTodo("");
  };

  const deleteListItem = (id) => {
    setTodoListItem(todolistItem.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodoListItem(
      todolistItem.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
        <div className="flex flex-row items-center space-x-3">
          <input
            className="border border-gray-400 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-200"
          >
            Enter
          </button>
        </div>
        <div className="w-full px-6">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-6 py-3 text-center">Completed</th>
                <th className="border border-gray-300 px-6 py-3 text-center">Task</th>
                <th className="border border-gray-300 px-6 py-3 text-center">Delete Task</th>
              </tr>
            </thead>
            <tbody>
              {todolistItem.map((todo) => (
                <tr key={todo.id} className="border border-gray-300 text-center">
                  <td className="border border-gray-300 px-6 py-2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleCompletion(todo.id)}
                    />
                  </td>
                  <td
                    className={`border border-gray-300 px-6 py-2 ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.title}
                  </td>
                  <td className="border border-gray-300 px-6 py-2">
                    <button
                      onClick={() => deleteListItem(todo.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
