import generateNextId from "../utils/generateNextId";

const todosReducer = (draftTodos, action) => {
    switch (action.type) {
        case "change": {
            const index = draftTodos.findIndex(
                (t) => t.id === action.changedTodo.id
            );
            draftTodos[index] = action.changedTodo;

            // return draftTodos.map((todo) => {
            //     if (todo.id === action.changedTodo.id) {
            //         return {
            //             ...todo,
            //             title: action.changedTodo.title,
            //             done: action.changedTodo.done,
            //         };
            //     }
            //     return todo;
            // });
            break;
        }

        case "add": {
            draftTodos.push({
                id: generateNextId(draftTodos),
                title: action.title,
                done: false,
            });

            // return [
            //     ...draftTodos,
            //     {
            //         id: generateNextId(draftTodos),
            //         title: action.title,
            //         done: false,
            //     },
            // ];
            break;
        }

        case "delete":
            return draftTodos.filter((todo) => todo.id !== action.todoId);

        default:
            throw new Error("no matching actions");
    }
};

export default todosReducer;
