import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function Todo({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const { onChangeTodo, onDeleteTodo } = useTodo();

    const todoContent = isEditing ? (
        <>
            <input
                type="text"
                value={todo.title}
                onChange={(e) =>
                    onChangeTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    ) : (
        <>
            {todo.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );

    return (
        <>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) =>
                    onChangeTodo({
                        ...todo,
                        done: e.target.checked,
                    })
                }
            />
            {todoContent}
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </>
    );
}
