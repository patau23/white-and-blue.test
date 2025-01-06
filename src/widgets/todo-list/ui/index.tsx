import React from "react";
import { useTodo } from "../../../entities/todo";
import TodoListItem from "./todo-list-item";
import useTodoList from "../model/useTodoList";
import { AddTodoButton } from "../../../features/todo/add-todo";
import { Description, Field, Input } from "@headlessui/react";
import clsx from "clsx";

export default function TodoList() {
    const { todos } = useTodo();
    const { search, setSearch, searchTodo } = useTodoList(todos);
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="">
                <div className="w-full max-w-md px-4">
                    <Field>
                        <Description className="text-sm/6 text-white/50">
                            Try to search through your whole list of deals.
                        </Description>
                        <Input
                            type="text"
                            className={clsx(
                                "mt-0 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Field>
                </div>
                <ul className="max-h-[200px] h-[200px] overflow-y-auto m-0 p-0">
                    {searchTodo(search).map((todo, index) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            number={index}
                        />
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <AddTodoButton />
            </div>
        </div>
    );
}
