// current features
/*
    a user should:

    - ++ see a list of tasks with a name, category, and whether completed or not
    - ++ be able to add a task
    - ++ be able to press enter key to add a task
    - ++ be able to add a category to a task
    - ++ be able to toggle a task complete/incomplete by clicking it
    - ++ be able to delete a task
    - ++ be able to clear all tasks
    - ++ be able to edit a task
    - ++ be able to select a category when editing the task
    - ++ be able to see a message when the user enters a task without any description/name
    - ++ be able to see a message indicating tasks havent been added yet
    - ++ be able to see a message indicating when no tasks match filters
    - ++ see how many total tasks
    - ++ see how many complete total tasks
    - ++ see how many incomplete total tasks
    - ++ be able to filter all tasks
    - ++ be able to filter complete tasks
    - ++ be able to filter incomplete tasks
    - ++ be able to filter by category
    - ++ be able to search by user input characters
    - ++ when finding a match the task item should be highlighted, and the task list should only show matching ones
    - ++ be able to see their filters loaded on page reload
    - ++ be able to see their search loaded on page reload
    - ++ be able to see the existing tasks loaded on page reload
    - ++ be able to see houston weather with name, lat/lng, temp, and conditions
*/



// Rebuild



// STATE

// tasks list
let tasks = [];

// categories list
const categories = ["Work", "Personal", "School", "Errand"];

// category filter list
const categoryFiltersList = ["All", ...categories];

// next task id
let nextTaskId = 1;

// editing state
let isEditing = false;

// task filter state
let filterStatus = "all";

// search filter state
let searchValue = "";

// current category state
let currentCategory = "All";

// sorting state
let sortMode = "none";






// DOM SELECTIONS
const newTaskInput = document.querySelector("#new-task-input");
const newTaskButton = document.querySelector("#new-task-button");
const clearTasksButton = document.querySelector("#clear-tasks-button");
const taskCategoryInput = document.querySelector("#task-category-input");
const tasksList = document.querySelector("#tasks-list");

// task stats elements
const totalCount = document.querySelector("#total-count");
const completeCount = document.querySelector("#complete-count");
const incompleteCount = document.querySelector("#incomplete-count");
const categoryStatsList = document.querySelector("#category-stats-list");
const progressBar = document.querySelector("#progress-bar");

// task filters
const allTasksButton = document.querySelector("#show-all-tasks");
const completeTasksButton = document.querySelector("#show-complete-tasks");
const incompleteTasksButton = document.querySelector("#show-incomplete-tasks");
const searchBar = document.querySelector("#search-bar");
const categoryFilterSelect = document.querySelector("#show-tasks-by-category");
const sortTasksSelect = document.querySelector("#sort-tasks-select");


// weather elements
const latLng = document.querySelector("#lat-lng");
const temp = document.querySelector("#temp");
const conditions = document.querySelector("#conditions");
const weatherButton = document.querySelector("#get-weather-button");







// FUNCTIONS

// add task
function addTask(text, category) {
    const newTask = {
        id: nextTaskId,
        text,
        complete: false,
        category
    }

    nextTaskId++;
    tasks.push(newTask);
    saveTasks();
}


// delete task
function removeTask(id) {
    const newTaskList = tasks.filter(task => task.id !== id);
    tasks = newTaskList;
    saveTasks();
}


// edit task
function editTask(id, text, category) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                text,
                category
            }
        }
        return task;
    })
    saveTasks();
}


// clear tasks
function clearTasks() {
    tasks = [];
    nextTaskId = 1;
    filterStatus = "all";
    searchValue = "";
    currentCategory = "All";
    categoryFilterSelect.value = "All";
    searchBar.value = "";
    clearStorage();
}


// toggle complete
function toggleCompleted(id) {
    for (let task of tasks) {
        if (id === task.id) {
            task.complete = !task.complete;
            saveTasks();
        }
    }
}







// local storage functions
function saveTasks() {
    const convertedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", convertedTasks);
}


function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    const parsedTasks = JSON.parse(savedTasks);

    if (!parsedTasks || parsedTasks.length === 0) {
        tasks = [];
        nextTaskId = 1;
        return;
    }

    const parsedTaskIds = parsedTasks.map(task => task.id);
    nextTaskId = Math.max(...parsedTaskIds) + 1;

    tasks = parsedTasks;
}


function clearStorage() {
    localStorage.removeItem("tasks");
    localStorage.removeItem("filterStatus");
    localStorage.removeItem("searchValue");
    localStorage.removeItem("currentCategory");
}


const saveFilter = () => localStorage.setItem("filterStatus", filterStatus);

function loadFilter() {
    const savedFilter = localStorage.getItem("filterStatus");
    if (!savedFilter) {
        filterStatus = "all";
        return;
    }

    filterStatus = savedFilter;
}

const saveSearch = () => localStorage.setItem("searchValue", searchValue);

function loadSearch() {
    const savedSearch = localStorage.getItem("searchValue");
    if (!savedSearch) {
        searchValue = "";
        searchBar.value = "";
        return;
    }

    searchValue = savedSearch;
    searchBar.value = searchValue;
}


const saveCategory = () => localStorage.setItem("currentCategory", currentCategory);

function loadCategory() {
    const savedCategory = localStorage.getItem("currentCategory");
    if (!savedCategory) {
        currentCategory = "All";
        return;
    }
    currentCategory = savedCategory;
    categoryFilterSelect.value = currentCategory;


}



// EVENT LISTENERS


// addTask handler
function addTaskHandler() {
    const text = newTaskInput.value.trim();
    const category = taskCategoryInput.value;

    if (text === "") {
        console.log("left empty, please add text to task");
        return;
    }

    addTask(text, category);
    newTaskInput.value = "";
    taskCategoryInput.value = categories[0];
    renderTasks();
}

// add task listener
newTaskButton.addEventListener("click", addTaskHandler);

// enter key task listener
newTaskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTaskHandler();
    }
})




// clear tasks listener
clearTasksButton.addEventListener("click", () => {
    clearTasks();
    renderTasks();
})



// task filter listeners

allTasksButton.addEventListener("click", () => {
    filterStatus = "all";
    saveFilter();
    renderTasks();
})

completeTasksButton.addEventListener("click", () => {
    filterStatus = "complete";
    saveFilter();
    renderTasks();
})

incompleteTasksButton.addEventListener("click", () => {
    filterStatus = "incomplete";
    saveFilter();
    renderTasks();
})

searchBar.addEventListener("input", (e) => {
    let searchText = e.target.value.trim();
    searchValue = searchText;
    saveSearch();

    renderTasks();
})

categoryFilterSelect.addEventListener("change", (e) => {
    let input = e.target.value;
    currentCategory = input;
    saveCategory();
    renderTasks();
})


sortTasksSelect.addEventListener("change", (e) => {
    let input = e.target.value;
    sortMode = input;
    renderTasks();
})



// weather button listener
weatherButton.addEventListener("click", () => {
    getWeather();
})








// RENDER ELEMENTS
function renderTasks() {
    tasksList.textContent = "";
    let shownTasks;


    if (filterStatus === "complete") {
        shownTasks = tasks.filter(task => task.complete);
    } else if (filterStatus === "incomplete") {
        shownTasks = tasks.filter(task => !task.complete);
    } else {
        shownTasks = tasks;
    }

    if (searchValue !== "") {
        shownTasks = shownTasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    if (currentCategory !== "All") {
        shownTasks = shownTasks.filter(task => task.category === currentCategory);
    }


    const totalTasksCount = tasks.length;
    const totalCompleteCount = tasks.filter(task => task.complete).length;
    const totalIncompleteCount = tasks.filter(task => !task.complete).length;

    totalCount.textContent = "Total tasks count: " + totalTasksCount;
    completeCount.textContent = "Complete tasks count: " + totalCompleteCount;
    incompleteCount.textContent = "Incomplete tasks count: " + totalIncompleteCount;

    renderCategoryStats();

    const percentageFormula = totalTasksCount === 0 ? 0 : Math.round((totalCompleteCount / totalTasksCount) * 100);

    progressBar.style.width = percentageFormula + "%";
    progressBar.textContent = percentageFormula + "%";
    

    

    if (shownTasks.length === 0) {
        const p = document.createElement("p");

        if (tasks.length === 0) {
            p.textContent = "No tasks added yet, add a task first!";
        } else {
            p.textContent = "No tasks match current filters";
        }

        tasksList.appendChild(p);
        return;
    }


    shownTasks = [...shownTasks];

    if (sortMode === "az") {
        shownTasks.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortMode === "za") {
        shownTasks.sort((a, b) => b.text.localeCompare(a.text));
    } else if (sortMode === "complete-first") {
        shownTasks.sort((a, b) => Number(b.complete) - Number(a.complete));
    } else if (sortMode === "incomplete-first") {
        shownTasks.sort((a, b) => Number(a.complete) - Number(b.complete));
    } else if (sortMode === "category-az") {
        shownTasks.sort((a, b) => a.category.localeCompare(b.category));
    }


    for (let task of shownTasks) {
        const li = document.createElement("li");
        const checkBox = document.createElement("input");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");
        const buttonContainer = document.createElement("div");
        li.textContent = task.text + " - " + task.category;
        checkBox.type = "checkbox";
        checkBox.checked = task.complete;
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");
        buttonContainer.classList.add("btn-container");
        editButton.textContent = "✎";
        editButton.classList.add("edit-btn");

        if (task.complete) {
            li.style.textDecoration = "line-through";
        }

        if (searchValue !== "" && task.text.toLowerCase().includes(searchValue.toLowerCase())) {
            li.style.backgroundColor = "lightgrey";
        }

        checkBox.addEventListener("change", () => {
            toggleCompleted(task.id);
            renderTasks();
        })

        deleteButton.addEventListener("click", () => {
            removeTask(task.id);
            renderTasks();
        })

        editButton.addEventListener("click", () => {
            isEditing = true;

            const form = document.createElement("form");
            const submitButton = document.createElement("input");
            form.classList.add("edit-form")
            submitButton.type = "submit";
            submitButton.textContent = "Submit";

            for (let [k, v] of Object.entries(task)) {
                if (k === "id") continue;
                if (k === "complete") continue;
                if (k === "category") {
                    const label = document.createElement("label");
                    const categorySelect = document.createElement("select");

                    label.textContent = k;
                    categorySelect.name = k;
                    categorySelect.classList.add("edit-form-select")

                    for (let c of categories) {
                        const o = document.createElement("option");
                        o.value = c;
                        o.textContent = c;

                        if (c === v) {
                            o.selected = true;
                        }

                        categorySelect.appendChild(o);
                    }

                    form.append(label, categorySelect);
                    continue;
                }




                const label = document.createElement("label");
                const input = document.createElement("input");

                label.textContent = k;
                input.value = v;
                input.name = k;

                form.append(label, input);
            }

            form.appendChild(submitButton);

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const newText = e.target.elements.text.value;
                const newCategory = e.target.elements.category.value;

                editTask(task.id, newText, newCategory);
                renderTasks();
                isEditing = false;

            })

            li.appendChild(form);


        })

        buttonContainer.append(deleteButton, editButton);


        li.append(checkBox, buttonContainer);
        tasksList.appendChild(li);
    }
}



function renderCategories() {
    for (let c of categories) {
        const o = document.createElement("option");
        o.textContent = c;
        o.value = c;
        taskCategoryInput.appendChild(o);
    }
}


function renderCategoriesFilters() {
    for (let c of categoryFiltersList) {
        const o = document.createElement("option");
        o.textContent = c;
        o.value = c;
        categoryFilterSelect.appendChild(o);
    }
}


function renderCategoryStats() {
    categoryStatsList.textContent = "";

    const categoryCounts = {};

    for (let category of categories) {
        categoryCounts[category] = 0;
    }

    const updatedCategoryCounts = tasks.reduce((accumulator, task) => {
        accumulator[task.category] = (accumulator[task.category] || 0) + 1
        return accumulator;
    }, categoryCounts);


    for (const [k, v] of Object.entries(updatedCategoryCounts)) {
        const p = document.createElement("p");
        p.textContent = `${k}: ${v}`;
        p.classList.add("category-stats");
        categoryStatsList.appendChild(p);
    }
}






// WEATHER 
function weatherCodeConverter(code) {


    const weatherCodes = {

        0: "Clear Sky",

        1: "Mainly Clear",

        2: "Partly Cloudy",

        3: "Overcast",

        45: "Fog",

        48: "Depositing Rime Fog",

        51: "Light Drizzle",

        53: "Moderate Drizzle",

        55: "Dense Drizzle",

        56: "Light Freezing Drizzle",

        57: "Dense Freezing Drizzle",

        61: "Slight Rain",

        63: "Moderate Rain",

        65: "Heavy Rain",

        66: "Light Freezing Rain",

        67: "Heavy Freezing Rain",

        71: "Slight Snow Fall",

        73: "Moderate Snow Fall",

        75: "Heavy Snow Fall",

        77: "Snow Grains",

        80: "Slight Rain Showers",

        81: "Moderate Rain Showers",

        82: "Violent Rain Showers",

        85: "Slight Snow Showers",

        86: "Heavy Snow Showers",

        95: "Thunderstorm (Slight or Moderate)",

        96: "Thunderstorm with Slight Hail",

        99: "Thunderstorm with Heavy Hail"

    };


    return weatherCodes[code] || "Unknown weather";
}


async function getWeather() {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=29.7633&longitude=-95.3633&current=temperature_2m,weather_code&temperature_unit=fahrenheit");
    const data = await res.json();

    latLng.textContent = "latitude: " + data.latitude + " | " + "longitude: " + data.longitude;
    temp.textContent = "temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    conditions.textContent = "conditions: " + weatherCodeConverter(data.current.weather_code);

}







function initApp() {
    loadTasks();
    loadFilter();
    loadSearch();
    renderCategories();
    renderCategoriesFilters();
    loadCategory();
    renderTasks();
}






// PAGE LOAD

initApp();























































