import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
    return (
        <div>
            <h1>Simple Todo App</h1>
            <TodoContextProvider>
                <AddTodo />
                <TodoList />
            </TodoContextProvider>
        </div>
    );
}

export default App;
