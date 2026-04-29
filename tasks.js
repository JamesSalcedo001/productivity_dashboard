// tasks.js
import { saveTasks } from "./storage.js";

export function addTask(tasks, text) {
    const newTask = {
        id: tasks.length + 1,
        text: text,
        completed: false
    }

    const updatedTasksList = tasks.push(newTask);
    return updatedTasksList;
};





export function toggleCompleted(tasks, id) {
    let taskFound = false;

    for (const task of tasks) {
        if (task.id === id) {
            taskFound = true;
            return task.completed = !task.completed;
        }
    }
    if (taskFound) {
        return saveTasks(tasks);
    }
}



export function getTaskStats(tasks) {
    if (tasks) {
        const taskStats = []
        const totalTasks = { total: tasks.length };
    }
}