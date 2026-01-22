"use client";
export default function Button({ filter, setFilter }) {
  return (
    <div className="flex gap-3 pt-5 h-13 items-center">
      <button onClick={() => setFilter("all")}  className={filter=== "all" ? "bg-blue-500 text-white rounded-md p-1.5" : "bg-gray-100 rounded-md p-1.5"}>All</button>

      <button onClick={() => setFilter("active")} className={filter=== "active" ? "bg-blue-500 text-white rounded-md p-1.5" : "bg-gray-100 rounded-md p-1.5"}>Active</button>
      <button  onClick={() => setFilter("completed")} className={filter=== "completed" ? "bg-blue-500 text-white rounded-md p-1.5" : "bg-gray-100 rounded-md p-1.5"}>Completed</button>
      
    </div>
  );
}
