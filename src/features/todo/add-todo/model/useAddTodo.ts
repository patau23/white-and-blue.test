import { TodoType, useTodo } from "../../../../entities/todo";
import { guidGenerator } from "../../../../shared";

const useAddTodo = () => {
    const { setTodo, todos } = useTodo();

    const addTodo = (newTodo: Omit<TodoType, "id">) => {
        setTodo((prev) => {
            return [...prev, { id: guidGenerator(), ...newTodo }];
        });
    };

    return { todos, addTodo };
};
export default useAddTodo;
