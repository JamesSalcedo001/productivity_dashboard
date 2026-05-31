// =============================

// 1. APP STATE

// =============================


// stores list of task objects
let tasks = [];
// filter state
let filterMode = "all";
// search state
let searchText = "";
// task categories
const categories = ["work", "personal", "school", "errands"];




// =============================

// 2. DOM SELECTIONS

// =============================

// Task elements
const addTaskInput = document.querySelector("#new-task-input");
const addTaskButton = document.querySelector("#new-task-button");
const tasksList = document.querySelector("#tasks-list");
const taskCategoryInput = document.querySelector("#task-category-input");
const clearTasksButton = document.querySelector("#clear-tasks-button");

// Filter/search elements

const allTasksFilterButton = document.querySelector("#all-tasks");
const completeTasksFilterButton = document.querySelector("#complete-tasks");
const incompleteTasksFilterButton = document.querySelector("#incomplete-tasks");
const searchInput = document.querySelector("#tasks-search-input");
const categoriesFilter = document.querySelector("#category-filter");

// Stats elements
const allTasksCount = document.querySelector("#total-task-count");
const completeTasksCount = document.querySelector("#complete-task-count");
const incompleteTasksCount = document.querySelector("#incomplete-task-count");

// Weather elements
const weatherButton = document.querySelector("#fetch-weather-button");
const latLng = document.querySelector("#lat-lng");
const temp = document.querySelector("#temp");
const weatherCode = document.querySelector("#weather-code");




// =============================

// 3. TASK DATA FUNCTIONS

// =============================


// creates a task object and saves it

function addTask(text, category) {
    const newTask = {
        id: tasks.length + 1,
        text,
        complete: false,
        category
    };

    tasks.push(newTask);
    saveTasks();
}


// resets task/search/filter state

function clearTasks() {
    tasks = [];
    filterMode = "all";
    searchText = "";
    searchInput.value = "";

    clearStorage();

}


// toggles one task complete/incomplete

function toggleCompleted(id) {
    let taskFound = false;
    for (let task of tasks) {
        if (task.id === id) {
            task.complete = !task.complete;
            taskFound = true;
        }
    }
    if (taskFound === true) {
        saveTasks();
    }
}




// =============================

// 4. LOCAL STORAGE FUNCTIONS

// =============================



function saveTasks() {
    const convertedTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", convertedTasks);
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
        tasks = [];
        return;
    };

    const parsedTasks = JSON.parse(savedTasks);
    tasks = parsedTasks;
}



function saveFilter() {
    localStorage.setItem("filter", filterMode);
}

function loadFilter() {
    const savedFilter = localStorage.getItem("filter");

    if (!savedFilter) {
        filterMode = "all";
        return;
    }
    filterMode = savedFilter;
}


function saveSearch() {
    localStorage.setItem("search", searchText);
}

function loadSearch() {
    const savedSearch = localStorage.getItem("search");
    if (!savedSearch) {
        searchText = "";
        searchInput.value = searchText;
        return;
    }

    searchText = savedSearch;
    searchInput.value = searchText;
}




function clearStorage() {
    localStorage.removeItem("tasks");
    localStorage.removeItem("search");
    localStorage.removeItem("filter");
}




// =============================

// 5. TASK RENDER FUNCTIONS

// =============================




// clears list

// applies filters/search

// updates stats

// creates li elements

function renderTasks() {
    tasksList.textContent = "";
    let shownTasks;


    if (filterMode === "complete") {
        shownTasks = tasks.filter(task => task.complete);
    } else if (filterMode === "incomplete") {
        shownTasks = tasks.filter(task => !task.complete);
    } else {
        shownTasks = tasks;
    }

    if (searchText !== "") {
        shownTasks = shownTasks.filter(task => task.text.toLowerCase().includes(searchText.toLowerCase()));
    }

    // total tasks stat
    const totalTaskCount = tasks.length;
    // total complete tasks stat
    const completedTaskCount = tasks.filter(task => task.complete).length;
    // total incomplete tasks stat
    const incompleteTaskCount = tasks.filter(task => !task.complete).length;

    allTasksCount.textContent = "Total tasks: " + totalTaskCount;
    completeTasksCount.textContent = "Completed tasks: " + completedTaskCount;
    incompleteTasksCount.textContent = "Incomplete tasks: " + incompleteTaskCount;



    for (let task of shownTasks) {
        const li = document.createElement('li');
        li.textContent = task.text + " - ( " + task.category + " ) ";

        if (task.complete) {
            li.style.textDecoration = "line-through";
        }

        if (searchText !== "" && task.text.toLowerCase().includes(searchText.toLowerCase())) {
            li.style.backgroundColor = "lightgrey";
        }


        li.addEventListener("click", () => {
            toggleCompleted(task.id);
            renderTasks();
        })


        tasksList.appendChild(li);
    }
}





function renderCategories() {
    for (const c of categories) {
        const o = document.createElement("option");
        o.textContent = c;
        o.value = c;
        taskCategoryInput.appendChild(o);
    }
}



function renderFilterCategories() {
    for (const c of categories) {
        const o = document.createElement("option");
        o.textContent = c;
        o.value = c;
        categoriesFilter.appendChild(o);
    }
}








// =============================

// 6. WEATHER FUNCTIONS

// =============================




// converts weather code into readable text


function weatherCodeConverter(code) {
    const codeChart = {

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

    return codeChart[code] || "Unknown Weather";
}





// fetches weather and updates weather UI

async function loadWeather() {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=29.7633&longitude=-95.3633&current=temperature_2m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch");
    const data = await res.json();

    latLng.textContent = "Latitude: " + data.latitude + "  |  " + "Longitude: " + data.longitude;
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    weatherCode.textContent = "Conditions: " + weatherCodeConverter(data.current.weather_code);

}







// =============================

// 7. EVENT LISTENERS

// =============================



// Add task

addTaskButton.addEventListener("click", () => {
    let inputValue = addTaskInput.value.trim();
    let category = taskCategoryInput.value;
    if (inputValue === "") {
        console.log("input left empty, please enter a task before clicking");
        return;
    }

    addTask(inputValue, category);
    renderTasks();

    addTaskInput.value = "";
})


// Clear tasks

clearTasksButton.addEventListener("click", () => {
    clearTasks();
    renderTasks();
})



// Filters

allTasksFilterButton.addEventListener("click", () => {
    filterMode = "all";
    saveFilter();
    renderTasks();
})

completeTasksFilterButton.addEventListener("click", () => {
    filterMode = "complete";
    saveFilter();
    renderTasks();
})

incompleteTasksFilterButton.addEventListener("click", () => {
    filterMode = "incomplete";
    saveFilter();
    renderTasks();
})


// Search

searchInput.addEventListener("input", () => {
    let inputValue = searchInput.value.trim();
    searchText = inputValue;
    saveSearch();
    renderTasks();
})



// Weather

weatherButton.addEventListener("click", () => {
    loadWeather();
})










// =============================

// 8. APP STARTUP

// =============================






loadTasks();
loadFilter();
loadSearch();
renderCategories();
renderFilterCategories();
renderTasks();
// loadWeather();






























