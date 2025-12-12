import { useImmerReducer } from "use-immer";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import initialTodos from "./data/initialTodos";
import todosReducer from "./reducers/todosReducer";

function App() {
    const [todos, dispatch] = useImmerReducer(todosReducer, initialTodos);

    const handleChangeTodo = (todo) => {
        dispatch({
            type: "change",
            todo,
        });
    };

    const handleAddTodo = (title) => {
        dispatch({
            type: "add",
            title,
        });
    };

    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: "delete",
            todoId,
        });
    };

    return (
        <div>
            <h1>Simple Todo App</h1>

            <AddTodo onAddTodo={handleAddTodo} />
            <TodoList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    );
}

export default App;
