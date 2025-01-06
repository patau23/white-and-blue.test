import React from "react";
import useDeleteTodo from "../model/useDeleteTodo";
import { TodoType } from "../../../../entities/todo";
import { Button } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
    children?: React.ReactNode;
    todo: TodoType;
}

export default function DeleteTodoButton({ todo }: Props) {
    const { deleteTodo } = useDeleteTodo();

    return (
        <Button onClick={() => deleteTodo(todo.id)}>
            <TrashIcon className="size-4 text-c-blue" />
        </Button>
    );
}
