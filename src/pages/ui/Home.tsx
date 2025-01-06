import React from "react";
import { TodoList } from "../../widgets/todo-list";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
            <h2 className="text-4xl font-medium">Things to do</h2>
            <TodoList />
            <div className="absolute inset-x-[33%] inset-y-[35%] block rounded-full bg-white/15 blur-2xl -z-10"></div>
        </div>
    );
}
