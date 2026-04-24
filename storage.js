// storage.js

export function saveTasks(tasks) {
    const convertedTasks = JSON.stringify(tasks);
    localStorage.setItem("savedTasks", convertedTasks);
}


export const saveFilter = (filterStatus) => localStorage.setItem("savedFilterStatus", filterStatus);


export const saveSearch = (searchValue) => localStorage.setItem("savedSearchInput", searchValue);





export function loadTasks() {
    const savedTasks = localStorage.getItem("savedTasks");
    const parsedTasks = JSON.parse(savedTasks);
    if (parsedTasks) {
        return parsedTasks;
    } else {
        return [];
    }
}




export const loadFilter = () => {
    const savedFilter = localStorage.getItem("savedFilterStatus");
    if (savedFilter) {
        return savedFilter;
    } else {
        return "all";
    }
}



export const loadSearch = () => {
    const savedSearch = localStorage.getItem("savedSearchInput");

    if (!savedSearch) {
        console.log("no search value yet");
        return "";
    }

    return savedSearch;
}





export const clearStorage = () => {
    localStorage.removeItem("savedTasks");
    localStorage.removeItem("savedFilterStatus");
    localStorage.removeItem("savedSearchInput");
}