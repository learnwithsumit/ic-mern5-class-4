import { useTodo } from "../contexts/TodoContext";
import Todo from "./Todo";

export default function TodoList() {
    const { todos } = useTodo();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{<Todo todo={todo} />}</li>
            ))}
        </ul>
    );
}
