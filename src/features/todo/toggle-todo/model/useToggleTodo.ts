import { TodoType, useTodo } from "../../../../entities/todo";

const useToggleTodo = () => {
    const { setTodo, todos } = useTodo();

    const toggleTodo = (id: number | string) => {
        setTodo((prev) => {
            return prev.map((todo): TodoType => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status: !todo.status,
                    };
                }
                return todo;
            });
        });
    };

    return { todos, toggleTodo };
};
export default useToggleTodo;
