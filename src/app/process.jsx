"use client";
export default function Process({ onToggleCheck, onDelete, filteredTodos }) {
  return (
    <div className="flex flex-col gap-3 pt-5">
      {filteredTodos.map((task) => (
        <div
          key={task.id}
          className="flex flex-row justify-between tasks-center bg-gray-200 w-full p-3 rounded-md"
        >
          <div className="flex gap-5 tasks-center">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => onToggleCheck(task.id)}
            />
            <p
              className={`${
                task.isCompleted ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </p>
          </div>
          <button className="text-red-500" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
