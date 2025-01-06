import { useTodo } from "../../../../entities/todo";

const useDeleteTodo = () => {
    const { setTodo, todos } = useTodo();

    const deleteTodo = (id: number | string) => {
        setTodo((prev) => {
            return prev.filter((todo) => todo.id !== id);
        });
    };

    return { deleteTodo, todos };
};
export default useDeleteTodo;
