// // tasks.js

// import { 
//     saveTasks,
//     loadTasks,
//     saveFilter,
//     loadFilter,
//     saveSearchText,
//     loadSearchText,
//     clearTaskStorage,
// } from "./storage.js";



// // create empty array to hold all task objects for the page
// let tasks = [];


// // create state variable for current filter mode starts as the string 'all'
// let filterMode = "all";

// // create state variable for the current search text starting as empty string
// let searchText = "";


// // select all DOM elements needed
// // task input
// const taskInput = document.querySelector("#task-input");
// // add button
// const addButton = document.querySelector("#task-button");
// // clear tasks button
// const clearButton = document.querySelector("#clear-button");
// // task list
// const list = document.querySelector("#task-list");
// // all filter button
// const allTasks = document.querySelector("#all");
// // completed filter button
// const completedTasks = document.querySelector("#completed");
// // incomplete filter button
// const incompleteTasks = document.querySelector("#incomplete");
// // search input
// const search = document.querySelector("#search");
// // total task count 
// const totalTasks = document.querySelector("#total-tasks");
// // complete task count
// const completed = document.querySelector("#completed-tasks");
// // incomplete task count
// const notComplete = document.querySelector("#incomplete-tasks")



// // write function that accepts task text
// /**
//  * 
//  * @param {*} text 
//  * takes in a task in the form of text, builds a new task object that assigns a unique id by checking length of tasks array and incrementing by 1, sets a text attribute to store what the task given is, and sets a boolean, completed, tracking whether the task has been done or not, and finally takes that newly created task and pushes it into the tasks array
//  */
// function createTask(text) {
//     // builds new task object with 3 props
//     const newTask = {
//         // id determined by checking length of tasks array and incrementing
//         id: tasks.length + 1,
//         // passed in text stored
//         text: text,
//         // boolean indicating whether or not a task has been completed or not
//         completed: false,
//     }
//     // takes newly created task and pushes it into the task array
//     tasks.push(newTask);
// }


// // write function that accepts id and toggles completed boolean
// /**
//  * 
//  * @param {*} id
//  * takes in id, loops through tasks array, compares task id with the id given for a match, and toggles the completed boolean value of that task to the opposite
//  */
// function toggleCompleted(id) {
//     // loops through all tasks
//     let taskFound = false;
//     for (let task of tasks) {
//         // find matching id
//         if (task.id === id) {
//             // flips tasks completed value to opposite
//             task.completed = !task.completed;
//             taskFound = true;
//         }
//     }
//     // after flipping value, call saveTasks()
//     if (taskFound) {
//         saveTasks(tasks);
//     }
// }





// // function that draws the visible task list and updates task statistics
// function renderTasks() {
//     // clear out current task list contents to rebuild from scratch
//     list.textContent = "";

//     // total tasks count
//     const totalTasksCount = tasks.length;
//     // update display
//     totalTasks.textContent = "total tasks: " + totalTasksCount;

//     // completed task count
//     const completedTaskCount = tasks.filter(task => task.completed).length;
//     // update display
//     completed.textContent = "completed tasks: " + completedTaskCount;

//     // incomplete task count
//     const incompleteTaskCount = tasks.filter(task => !task.completed).length;
//     // update display
//     notComplete.textContent = "incomplete tasks: " + incompleteTaskCount;

//     // temp variable for tasks to show
//     let shownTasks;

//     // if filter mode is completed
//     if (filterMode === "completed") {
//         // only show tasks with completed value of true
//         shownTasks = tasks.filter(task => task.completed);
//         // if filter mode incomplete
//     } else if (filterMode === "incomplete") {
//         // only show tasks with completed value of false
//         shownTasks = tasks.filter(task => !task.completed);
//         // if filter mode is all
//     } else {
//         // show all tasks complete or not
//         shownTasks = tasks;
//     }


//     // if there is a searchword, filter shownTasks, checking if the task object's text value lowercased contains the searchtext value lowercased  
//     if (searchText !== "") {
//         shownTasks = shownTasks.filter(task => task.text.toLowerCase().includes(searchText.toLowerCase()));
//     }

//     // if there are no shown tasks
//     if (shownTasks.length === 0) {
//         // create an element
//         const p = document.createElement("p");
//         // give it the text no tasks found
//         p.textContent = "No tasks found";
//         // append it as a child element to list
//         list.appendChild(p);

//         return;
//     }

//     // if there are tasks, loop through the filtered task list
//     for (const task of shownTasks) {
//         // create a new list item element
//         const li = document.createElement("li");
//         // assign the task's text value to the li's text content
//         li.textContent = task.text;

//         // check whether task is completed and if so apply style line through
//         if (task.completed) {
//             li.style.textDecoration = "line-through";
//         }

//         // check if there is a search value and if it matches that task text value
//         if (searchText !== "" && task.text.toLowerCase().includes(searchText.toLowerCase())) {
//             // if so apply a background color
//             li.style.backgroundColor = "lightgrey";
//         } else {
//             // else remove that background color
//             li.style.backgroundColor = "";
//         }

//         // click event for li so clicking it calls the toggle function and the render function so the visual state updates 
//         li.addEventListener("click", () => {
//             // pass in task's id to target it
//             toggleCompleted(task.id);
//             // call to update the visual state again of task list
//             renderTasks();
//         })

//         // append li to list element
//         list.appendChild(li);

//     }


// }








// function attachTaskListeners() {


// // add click event listener to add button
// addButton.addEventListener("click", () => {
//     // read current task input value, trimming external white space, stored in a variable
//     const text = taskInput.value.trim();
//     // guard against empty submissions
//     if (text === "") return;

//     // call createTask function with the current text
//     createTask(text);

//     // call savetasks after adding task
//     saveTasks(tasks);

//     // clear the input
//     taskInput.value = "";

//     // call render function to update tasks to keep up with data changes
//     renderTasks();

// });


// // click event listener for clear tasks button
// clearButton.addEventListener("click", () => {
//     tasks = [];
//     filterMode = "all";
//     searchText = "";
//     search.value = "";
//     clearTaskStorage();
//     renderTasks();
// })


// // click event listener for all
// allTasks.addEventListener("click", () => {
//     filterMode = "all";
//     // after changing filter state, save to localstorage
//     saveFilter(filterMode);
//     renderTasks();
// });



// // click event listener for completed
// completedTasks.addEventListener("click", () => {
//     filterMode = "completed";
//     // after changing filter state, save to localstorage
//     saveFilter(filterMode);
//     renderTasks();
// });



// // click event listener for incomplete tasks
// incompleteTasks.addEventListener("click", () => {
//     filterMode = "incomplete";
//     // after changing filter state, save to localstorage
//     saveFilter(filterMode);
//     renderTasks();
// });


// // input event listener for search input
// search.addEventListener("input", (e) => {
//     searchText = e.target.value;
//     saveSearchText(searchText);
//     renderTasks();
// });





// }

























// export function initTasks() {
//     tasks = loadTasks();
//     filterMode = loadFilter();
//     searchText = loadSearchText();

//     searchInput.value = searchText;

//     attachTaskListeners();
//     renderTasks();
// }



