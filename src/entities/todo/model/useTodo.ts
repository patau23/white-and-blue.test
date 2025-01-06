import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TodoType } from "./types";
import { initialData } from "./constants";

interface IUseTodo {
    todos: TodoType[];
    setTodo: (callback: (list: TodoType[]) => TodoType[]) => void;
}

const useTodo = create<IUseTodo>()(
    persist<IUseTodo>(
        (set) => ({
            todos: initialData,
            setTodo: (callback) => {
                set((state) => {
                    const result = callback(state.todos);
                    return { todos: result };
                });
            },
        }),
        {
            name: "app-storage", // ключ для хранения данных в localStorage
        }
    )
);




export default useTodo;
