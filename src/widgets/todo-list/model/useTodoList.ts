import { useState } from "react";
import { TodoType } from "../../../entities/todo";

export default function useTodoList(todos: TodoType[]) {
    const [search, setSearch] = useState("");

    const searchTodo = (text: string) => {
        if (text.trim() === "") return todos;
        return todos.filter((todo) =>
            todo.text.toLowerCase().includes(text.toLowerCase())
        );
    };

    return { search, setSearch, searchTodo };
}
