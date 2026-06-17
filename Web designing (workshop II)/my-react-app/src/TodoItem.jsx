import { useState } from "react";

function TodoItem({
  todo,
  deleteTodo,
  toggleComplete,
  editTodo,
}) {
  const [isEditing, setIsEditing] =
    useState(false);

  const [newText, setNewText] =
    useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          toggleComplete(todo.id)
        }
      />

      {isEditing ? (
        <input
          value={newText}
          onChange={(e) =>
            setNewText(e.target.value)
          }
        />
      ) : (
        <span
          className={
            todo.completed
              ? "completed"
              : ""
          }
        >
          {todo.text}
        </span>
      )}

      <div className="buttons">
        {isEditing ? (
          <button onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button
            onClick={() =>
              setIsEditing(true)
            }
          >
            Edit
          </button>
        )}

        <button
          onClick={() =>
            deleteTodo(todo.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;