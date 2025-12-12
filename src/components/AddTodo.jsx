import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const { onAddTodo } = useTodo();

    return (
        <>
            <input
                type="text"
                placeholder="Add task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => onAddTodo(title)}>Add</button>
        </>
    );
}
