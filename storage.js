// // storage.js

// export function saveTasks(tasks) {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// export function loadTasks() {
//     // gets data from localstorage
//     const savedTasks = localStorage.getItem("tasks");
//     // checks if it exists
//     if (!savedTasks) {
//         console.log("No saved tasks yet");
//         return [];
//     }
//     // converts JSON data to an Object
//     return JSON.parse(savedTasks);
// }


// export function saveFilter(filterMode) {
//     // takes filtermode string and stores it in the browser
//     localStorage.setItem("filterStatus", filterMode);
// }


// export function loadFilter() {
//     // gets the stored filterStatus string from the browser
//     const savedFilter = localStorage.getItem("filterStatus");
//     // checks if exists and if not returns
//     return savedFilter || "all";
// }




// export function saveSearchText(searchText) {
//     // takes current search input text and saves to browser
//     localStorage.setItem("searchText", searchText);
// }

// export function loadSearchText() {
//     const savedSearchText = localStorage.getItem("searchText");

//     return savedSearchText || "";
// }


// export function clearTaskStorage() {
//     localStorage.removeItem("tasks");
//     localStorage.removeItem("filterStatus");
//     localStorage.removeItem("searchText");
// }



