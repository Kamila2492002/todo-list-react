import { useState, useEffect } from "react";

const defaultTasks = [
    { id: 1, content: "przejść na Reacta", done: false},
    { id: 2, content: "zjeść kolacje", done: true},
];

export const useTasks = () => {
    const tasksLocalStorage = localStorage.getItem("tasks");
    const [tasks, setTasks] = useState(
        JSON.parse(tasksLocalStorage) || defaultTasks
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
};