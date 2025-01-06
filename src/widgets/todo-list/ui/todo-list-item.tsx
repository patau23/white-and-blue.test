import React from "react";
import { TodoType, TodoItem } from "../../../entities/todo";
import { DeleteTodoButton } from "../../../features/todo/delete-todo";
import { ToggleTodoRadio } from "../../../features/todo/toggle-todo";

export default function TodoListItem({
    todo,
    number,
}: {
    todo: TodoType;
    number: number;
}) {
    return (
        <li className="flex items-center justify-between gap-1 px-4">
            <TodoItem todo={todo} index={number} />
            <hr />
            <div className="flex items-center gap-1">
                <ToggleTodoRadio todo={todo} />
                <DeleteTodoButton todo={todo} />
            </div>
        </li>
    );
}
