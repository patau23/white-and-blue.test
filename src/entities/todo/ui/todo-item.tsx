import React from "react";
import { TodoType } from "../model/types";

interface TodoItemProps {
    children?: React.ReactNode;
    todo: TodoType;
    index: number;
}

export default function TodoItem({ todo, index }: TodoItemProps) {
    return (
        <div>
            <span className="italic">{index + 1}. </span>
            <span
                className="truncate max-w-[250px] "
                style={{
                    textDecoration: todo.status ? "line-through" : "none",
                }}
            >
                {todo.text}
            </span>
        </div>
    );
}
