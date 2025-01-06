import React from "react";
import { TodoType } from "../../../../entities/todo";
import useToggleTodo from "../model/useToggleTodo";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";

interface Props {
    children?: React.ReactNode;
    todo: TodoType;
}

export default function ToggleTodoRadio({ todo }: Props) {
    const { toggleTodo } = useToggleTodo();

    return (
        <Checkbox
            className="relative flex group size-4 rounded-md bg-transparent p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white/5"
            checked={todo.status}
            onChange={() => toggleTodo(todo.id)}
        >
            <CheckIcon className="hidden absolute -top-[6px] -left-[2px] size-6 fill-c-blue/75 group-data-[checked]:block" />
        </Checkbox>
    );
}
