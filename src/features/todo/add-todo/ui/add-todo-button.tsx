import React, { useState } from "react";
import { Button, Description, Field, Input, Label } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import useAddTodo from "../model/useAddTodo";
import clsx from "clsx";

export default function AddTodo() {
    const [text, setText] = useState<string>("");
    const { addTodo } = useAddTodo();

    const handleAdd = () => {
        if (text.trim() !== "") addTodo({ status: false, text: text.trim() });
        setText("");
    };

    return (
        <div className="flex flex-col gap-2 items-center w-full max-w-md px-4">
            <Field>
                <Description className="text-sm/6 text-white/50">
                    Write down your to-do list so you don't forget
                </Description>
                <Input
                    type="text"
                    className={clsx(
                        "mt-0 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Field>
            <div className="w-[60%]">
                <Button
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white/15  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    onClick={handleAdd}
                >
                    <span className="text-sm/6 text-white/50 font-normal">
                        Add new item
                    </span>
                    <PlusIcon className="size-3 text-white/85" />
                </Button>
            </div>
        </div>
    );
}
