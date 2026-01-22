"use client";
export default function ClearButton({ onClearCompleted, todo }) {
  return (
    <div className="border-t border-gray-200 flex flex-row text-[16px] justify-between mt-5 pt-3">
      <p>
        {todo.filter((ted) => ted.isCompleted).length} out of {todo.length}{" "}
        completed
      </p>
      <button className="text-red-500" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
