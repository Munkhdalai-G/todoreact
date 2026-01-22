"use client";
export default function OnAdd({ handleInputChange, onAddTodo, value }) {
  return (
    <div className="flex justify-center gap-5 h-8">
      <input
        className="border-gray-300 border rounded-md w-100"
        type="text"
        placeholder="  Add a new task..."
        value={value}
        onChange={handleInputChange}
      />
      <button
        onClick={onAddTodo}
        className="bg-blue-500 text-white rounded-md w-30"
      >
        Add
      </button>
    </div>
  );
}
