import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import initialTodos from "../data/initialTodos";
import todosReducer from "../reducer/todosReducer";

export const TodoContext = createContext(null);

export default function TodoContextProvider({ children }) {
    const [todos, dispatch] = useImmerReducer(todosReducer, initialTodos);

    const handleChangeTodo = (changedTodo) => {
        dispatch({
            type: "change",
            changedTodo,
        });
    };

    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: "delete",
            todoId,
        });
    };

    const handleAddTodo = (title) => {
        dispatch({
            type: "add",
            title,
        });
    };

    return (
        <TodoContext
            value={{
                todos,
                onAddTodo: handleAddTodo,
                onChangeTodo: handleChangeTodo,
                onDeleteTodo: handleDeleteTodo,
            }}
        >
            {children}
        </TodoContext>
    );
}

export function useTodo() {
    return useContext(TodoContext);
}
