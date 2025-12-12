import getNextId from "../utils/getNextTodoId";

export default function todosReducer(draftTodos, action) {
    switch (action.type) {
        case "change": {
            const index = draftTodos.findIndex((t) => t.id === action.todo.id);
            draftTodos[index] = action.todo;

            break;
        }
        case "add":
            draftTodos.push({
                id: getNextId(draftTodos),
                title: action.title,
                done: false,
            });
            break;
        case "delete":
            return draftTodos.filter((t) => t.id !== action.todoId);

        default:
            throw new Error("no matching actions");
    }
}
