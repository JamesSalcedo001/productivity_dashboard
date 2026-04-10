// Ex 1: Remove duplicates

// input: [1,2,2,3,4,4,5]

// output: [1,2,3,4,5]

// hint: set, filter or using object to track seen values

// answer:

// const input = [1, 2, 2, 3, 4, 4, 5];


// set:
// const set = new Set(input);
// console.log("Set remove dupes: ", set, "\n");


// filter:
// const filtered = input.filter((item, index) => {
//     return input.indexOf(item) === index;
// })

// console.log("Filter remove dupes: ", filtered, "\n");


// object track seen values:
// let seen = {};
// let unique = [];

// input.forEach(item => {
//     if (!seen[item]) {
//         unique.push(item);
//         seen[item] = true;
//     }
// })

// console.log("use object track seen: ", seen, "\n", unique, "\n");



// ex 2: count occurrences

// input: ["apple","banana","apple","orange","banana","apple"]

// output: 

/*
{
    apple: 3,
    banana: 2,
    orange: 1
}
*/

// answer:



// object accumulator??


// const input2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = {};

// input2.forEach(item => {
//     count[item] = (count[item] || 0) + 1;
// })

// console.log("using forEach: ", count, "\n");



// loop
// const count2 = {};

// for (let item of input2) {
//     count2[item] = (count2[item] || 0) + 1;
// }
// console.log("using a loop: ", count2, "\n")



// reduce
// const itemCount = input2.reduce((accumulator, currentVal) => {
//     accumulator[currentVal] = (accumulator[currentVal] || 0) + 1;
//     return accumulator;
// }, {});

// console.log("using reduce: ", itemCount, "\n");




// ex 3: flatten nested arrays

// input: [1,[2,3],[4,[5,6]]]

// output: [1,2,3,4,5,6]


// answer: 

// const input3 = [1, [2, 3], [4, [5, 6]]];

// recursion

// dont really know this



// .flat()
// console.log("nested array flattened with flat method: ", input3.flat(input3.length), "\n")


// reduce

// dont really know this




// ex 4: group items by category

// input: 

/*
    [
        {name:"milk", category:"food"},
        {name:"shirt", category:"clothing"},
        {name:"apple", category:"food"}
    ]
*/



// output: 

/*
    {
        food: [
            {name:"milk", category:"food"},
            {name:"apple", category:"food"}
        ],
        clothing: [
            {name:"shirt", category:"clothing"}
        ]
    }
*/




// answer:

// dont reallt know this








// productivity dashboard project


// how to store tasks

// let tasks = [];

// each task might look like: 

/*
    {
        id: 1,
        text: "Buy groceries",
        completed: false
    }
*/


// this structure might be useful to keep track of tasks with unique id, the text part would be useful to modify easily, and the completed part can be toggled and used for things like showing incomplete tasks and marking/hiding/removing complete ones so one can visually focus on the incomplete work



// mini challenge create a function addTask(text) that creates a task object, and pushes it into the array

// ex: addTask("Buy milk"), addTask("Walk dog")


// function addTask(text) {
//     const newTask = {
//         id: tasks.length + 1,
//         text: text,
//         completed: false
//     };

//     tasks.push(newTask);
// }



// stretch challenge write toggleTask(id) that flips completed between true and false

// function toggleTask(id) {
//     for (let t of tasks) {
//         if (t.id === id) {
//             t.completed = !t.completed;
//         }
//     }
// }



// addTask("Buy milk");
// addTask("Walk dog");

// console.log("tasks array after pushing two tasks: ", tasks, "\n");



// Day 1 recovery review

// core pattern 1: build a result from an array

// ex:

// const numbers = [1, 2, 3];
// let result = [];

// for (let num of numbers) {
//     result.push(num * 2);
// }

// console.log(result);


// loop over items
// do something with each item
// push into a new result  



// core pattern 2: count things with an object

// ex:

// const fruits = ["apple", "banana", "apple"];
// let counts = {};

// for (let fruit of fruits) {
//     if (counts[fruit]) {
//         counts[fruit] += 1;
//     } else {
//         counts[fruit] = 1;
//     }
// }

// console.log(counts);

// this is the same as counts[fruit] = (counts[fruit] || 0) + 1; - shortcut



// core pattern 3: group things with an object - instead of numbers each key stores an array

// ex:

// const items = [
//     { name: "milk", category: "food" },
//     { name: "shirt", category: "clothing" },
//     { name: "apple", category: "food" }
// ];

// let grouped = {};

// for (let item of items) {
//     const category = item.category;

//     if (!grouped[category]) {
//         grouped[category] = [];
//     }

//     grouped[category].push(item);
// }

// console.log("object with grouped array items\n", grouped, "\n");


// check if bucket exists
// if not, create bucket
// put item in bucket



// core pattern 4: update one object inside an array

// ex:

// let tasks2 = [
//     { id: 1, text: "Buy milk", completed: false },
//     { id: 2, text: "Walk dog", completed: false }
// ]

// for (let task of tasks) {
//     if (task.id === 2) {
//         task.completed = !task.completed;
//     }
// }

// pattern for toggling, editing, marking complete etc


// create a task object
// const task = {
//     id: 1,
//     text: "Buy milk",
//     completed: false
// };

// add a task to an array
// tasks.push(task);

// loop through tasks
// for (let task of tasks) {
//     console.log(task.text);
// }

// update one matching task
// if (task.id === id) {
//     task.completed = !task.completed;
// }

// ex a: create an array called tasks
//  add two task objects manually

// const tasks2 = [
//     { id: 1, text: "Buy milk", completed: false },
//     { id: 2, text: "Walk dog", completed: false }
// ];

// ex b: write a loop that logs only the task text:

// for (let task of tasks2) {
//     console.log("\n", task.text, "\n");
// }


// ex c: write an addTask(text) function using: id: tasks.length + 1

// function addTask2(text) {
//     const newTask = {
//         id: tasks2.length + 1,
//         text: text,
//         completed: false
//     }

//     tasks2.push(newTask);
// }

// addTask2("remember you have a cat");
// console.log("\n add new task: ", tasks2, "\n");

// ex d: write toggleTask(id) and test it on one task:

// function toggleTask2(id) {
//    for (let task of tasks2) {
//         if (task.id === id) {
//             task.completed = !task.completed;
//         }
//    }
// }

// toggleTask2(1);
// console.log('toggleTask on task with id of 1: \n', tasks2, "\n");




// // week 1 day 2

// const tasks = [];

// function addTask(text) {
//     const newTask = {
//         id: tasks.length + 1,
//         text: text,
//         completed: false
//     }

//     tasks.push(newTask);
// }


// // challenge 1: mark complete visually

// function toggleTask(id) {
//     for (let task of tasks) {
//         if (task.id === id) {
//             task.completed = !task.completed;
//         }
//     }
// }




// // make tasks appear on screen

// // type a task
// // click a button 
// // see it show up in the list

// //  grab input, button and list(ul)

// // write 3 variables using document.querySelector()

// const input = document.querySelector("#task-input");
// const button = document.querySelector("#task-button");
// const list = document.querySelector("#task-list");



// // button is clicked -> something happens

// // button.addEventListener("click", () => {
// //     console.log("clicked")
// // })


// // step 3: get input value

// // after clicking button ->> log input value
// // button.addEventListener("click", () => {
// //     const text = input.value;
// //     console.log(text);
// // })


// // step 4: connect to existing logic: addTask(text) => inside click event, get input value, and call addTask(text)

// button.addEventListener("click", () => {
//     const text = input.value.trim();
//     if (text === "") return;
//     addTask(text);
//     // after adding task, clear input
//     input.value = "";
//     // after adding task, rerender task list with new task
//     renderTasks();
// })



// // step 5: render tasks

// // take the tasks array and display it in the ul


// function renderTasks() {
//     // clear list
//     list.textContent = "";

//     // loop through tasks array
//     for (let task of tasks) {
//         // create li
//         const li = document.createElement("li");
//         // put text inside
//         li.textContent = task.text;

//         // mark complete visually
//         if (task.completed) {
//             li.style.textDecoration = "line-through";
//         }

//         // challenge 2: click to toggle?
//         li.addEventListener("click", () => {
//             toggleTask(task.id);
//             renderTasks();
//         })

//         // attach to DOM
//         list.appendChild(li);
//     }
// }



// // challenge 1: mark complete visually

// // function toggleText(id) {
// //     for (let task of tasks) {
// //         if (task.id === id) {
// //             task.completed = !task.completed;
// //         }
// //     }
// // }



// // challenge 2: click to toggle






// // rebuild
// // create empty array:
// const tasks = [];

// // create all filter variable
// let filter = "all";

// // create a search word variable
// let searchWord = "";

// // function to add a new task, accepts task text as argument

// function addTask(text) {
//     // builds new task object with 3 properties
//     const newTask = {
//         // id based on current num of tasks plus one
//         id: tasks.length + 1,
//         // text that was passed in
//         text: text,
//         // completed value starting as false
//         completed: false
//     }
//     // push object into tasks array
//     tasks.push(newTask);
// }


// // second function to toggle a task
// // accepts id
// function toggleTask(id) {
//     // loops through every task
//     for (let task of tasks) {
//         // check which one matches that id
//         if (task.id === id) {
//             // if matches, flip completed value to oppposite
//             task.completed = !task.completed;
//         }
//     }
// }



// // select 3 DOM elements needed

// // task input
// const input = document.querySelector("#task-input");
// // task button
// const button = document.querySelector("#task-button");
// // task list
// const list = document.querySelector("#task-list");

// // select filter buttons

// // all
// const all = document.querySelector("#all");

// // completed
// const completed = document.querySelector("#completed");

// // incomplete
// const incomplete = document.querySelector("#incomplete");

// // select search element
// const search = document.querySelector("#search")



// // add click event listener to button
// button.addEventListener("click", () => {
//     // read current input value, trim whitepace, and store as "text"
//     const text = input.value.trim();
//     // protect agaist empty submissions
//     if (text === "") return;
//     // if valid call addtask
//     addTask(text);
//     // after adding clear the input
//     input.value = "";
//     // call render function to update screen after data change
//     renderTasks();
// })



// // add event listener to search input
// search.addEventListener("input", (event) => {
//     const searchText = event.target.value;
//     searchWord = searchText;
//     renderTasks();
//     console.log(searchWord);
// })



// // add click listeners to filter buttons
// all.addEventListener("click", () => {
//     // update filter variable
//     filter = "all";
//     // call rendertasks to update visual state
//     renderTasks();
// });


// completed.addEventListener("click", () => {
//     // update filter variable
//     filter = "completed";
//     // call rendertasks to update visual state
//     renderTasks();
// });


// incomplete.addEventListener("click", () => {
//     // update filter variable
//     filter = "incomplete";
//     // call rendertasks to update visual state
//     renderTasks();
// });


// // create render function that draws the task list onto the page
// function renderTasks() {
//     // clear out current list contents
//     list.textContent = "";

//     // total amount of tasks
//     const total = tasks.length;
//     // total amount of completed tasks
//     const completedCount = tasks.filter(task => task.completed).length;
//     // total amount of incomplete tasks
//     const remainingCount = tasks.filter(task => !task.completed).length;

//     // create variable
//     let tasksToShow;
//     if (filter === "completed") {
//         // set variable to equal the tasks array filtered to only show completed tasks
//         tasksToShow = tasks.filter(task => task.completed)
//     } else if (filter === "incomplete") {
//         // set variable to equal the tasks array filtered to only show INCOMPLETE tasks
//         tasksToShow = tasks.filter(task => !task.completed);
//     } else {
//         // set variable to equal the normal tasks array
//         tasksToShow = tasks;
//     }


//     if (searchWord !== "") {
//         tasksToShow = tasksToShow.filter(task => task.text.toLowerCase().includes(searchWord.toLowerCase()));
//     }

//     if (tasksToShow.length === 0) {
//         const p = document.createElement("p");
//         p.textContent = "No tasks found";
//         list.appendChild(p);
//     }

//     // loop through the task array - changed tasks to tasksToShow
//     for (let task of tasksToShow) {
//         // for each task, create a list item element
//         const li = document.createElement("li");
//         // put task's text inside it as visible content
//         li.textContent = task.text;
//         // check whether it's completed
//         if (task.completed) {
//             // apply line through visual to show checked off
//             li.style.textDecoration = "line-through";
//         }

//         // add click event to li
//         li.addEventListener("click", () => {
//             // call toggletask function using current task's id as argument
//             toggleTask(task.id);
//             // call renderTasks to update the visual state
//             renderTasks();
//         })
//         // append the li to the UL
//         list.appendChild(li);

//     }
// }



// need 3 buttons, all completed and incomplete

// add search - user types - tasks get filter by text

// create search input - separate from task input - used only for filtering

// task statistics

// show total tasks
//  completed tasks
// remaining tasks








// rebuild again

// create empty array to hold all task objects for the page
let tasks = [];


function saveTasks() {
    // takes task array, converts it to a string
    const convertedTasks = JSON.stringify(tasks);
    // takes the stringified array and stores the data in the browser as a string
    localStorage.setItem("tasks", convertedTasks);
}

function loadTasks() {
    // gets data from localstorage
    const savedTasks = localStorage.getItem("tasks");
    // checks if it exists
    if (!savedTasks) {
        console.log("No saved tasks yet");
        return;
    }
    // converts JSON data to an Object
    const parsedTasks = JSON.parse(savedTasks);
    tasks = parsedTasks;
}


function saveFilter() {
    // takes filtermode string and stores it in the browser
    localStorage.setItem("filterStatus", filterMode);
}


function loadFilter() {
    // gets the stored filterStatus string from the browser
    const savedFilter = localStorage.getItem("filterStatus");
    // checks if exists and if not returns
    if (!savedFilter) {
        console.log("No filter yet");
        return;
    }
    // assigns the filtermode state to match the savedFilter from localstorage
    filterMode = savedFilter;
}




function saveSearchText() {
    // takes current search input text and saves to browser
    localStorage.setItem("searchText", searchText);
}

function loadSearchText() {
    const savedSearchText = localStorage.getItem("searchText");

    if (!savedSearchText) {
        console.log("no search yet");
        return;
    }

    searchText = savedSearchText;
    search.value = searchText;
}



// create state variable for current filter mode starts as the string 'all'
let filterMode = "all";

// create state variable for the current search text starting as empty string
let searchText = "";

// write function that accepts task text
/**
 * 
 * @param {*} text 
 * takes in a task in the form of text, builds a new task object that assigns a unique id by checking length of tasks array and incrementing by 1, sets a text attribute to store what the task given is, and sets a boolean, completed, tracking whether the task has been done or not, and finally takes that newly created task and pushes it into the tasks array
 */
function createTask(text) {
    // builds new task object with 3 props
    const newTask = {
        // id determined by checking length of tasks array and incrementing
        id: tasks.length + 1,
        // passed in text stored
        text: text,
        // boolean indicating whether or not a task has been completed or not
        completed: false,
    }
    // takes newly created task and pushes it into the task array
    tasks.push(newTask);
}


// write function that accepts id and toggles completed boolean
/**
 * 
 * @param {*} id
 * takes in id, loops through tasks array, compares task id with the id given for a match, and toggles the completed boolean value of that task to the opposite
 */
function toggleCompleted(id) {
    // loops through all tasks
    let taskFound = false;
    for (let task of tasks) {
        // find matching id
        if (task.id === id) {
            // flips tasks completed value to opposite
            task.completed = !task.completed;
            taskFound = true;
        }
    }
    // after flipping value, call saveTasks()
    if (taskFound) {
        saveTasks();
    }
}


// select all DOM elements needed
// task input
const taskInput = document.querySelector("#task-input");
// add button
const addButton = document.querySelector("#task-button");
// clear tasks button
const clearButton = document.querySelector("#clear-button");
// task list
const list = document.querySelector("#task-list");
// all filter button
const allTasks = document.querySelector("#all");
// completed filter button
const completedTasks = document.querySelector("#completed");
// incomplete filter button
const incompleteTasks = document.querySelector("#incomplete");
// search input
const search = document.querySelector("#search");
// total task count 
const totalTasks = document.querySelector("#total-tasks");
// complete task count
const completed = document.querySelector("#completed-tasks");
// incomplete task count
const notComplete = document.querySelector("#incomplete-tasks")


// add click event listener to add button
addButton.addEventListener("click", () => {
    // read current task input value, trimming external white space, stored in a variable
    const text = taskInput.value.trim();
    // guard against empty submissions
    if (text === "") return;

    // call createTask function with the current text
    createTask(text);

    // call savetasks after adding task
    saveTasks();

    // clear the input
    taskInput.value = "";

    // call render function to update tasks to keep up with data changes
    renderTasks();

});

// click event listener for clear tasks button
clearButton.addEventListener("click", () => {
    tasks = [];
    filterMode = "all";
    searchText = "";
    search.value = "";
    localStorage.removeItem("tasks");
    localStorage.removeItem("filterStatus");
    localStorage.removeItem("searchText");
    renderTasks();
})




// click event listener for all
allTasks.addEventListener("click", () => {
    filterMode = "all";
    // after changing filter state, save to localstorage
    saveFilter();
    renderTasks();
});

// click event listener for completed
completedTasks.addEventListener("click", () => {
    filterMode = "completed";
    // after changing filter state, save to localstorage
    saveFilter();
    renderTasks();
});


// click event listener for incomplete tasks
incompleteTasks.addEventListener("click", () => {
    filterMode = "incomplete";
    // after changing filter state, save to localstorage
    saveFilter();
    renderTasks();
});


// input event listener for search input
search.addEventListener("input", (e) => {
    searchText = e.target.value;
    saveSearchText();
    renderTasks();
});


// function that draws the visible task list and updates task statistics
function renderTasks() {
    // clear out current task list contents to rebuild from scratch
    list.textContent = "";

    // total tasks count
    const totalTasksCount = tasks.length;
    // update display
    totalTasks.textContent = "total tasks: " + totalTasksCount;

    // completed task count
    const completedTaskCount = tasks.filter(task => task.completed).length;
    // update display
    completed.textContent = "completed tasks: " + completedTaskCount;

    // incomplete task count
    const incompleteTaskCount = tasks.filter(task => !task.completed).length;
    // update display
    notComplete.textContent = "incomplete tasks: " + incompleteTaskCount;

    // temp variable for tasks to show
    let shownTasks;

    // if filter mode is completed
    if (filterMode === "completed") {
        // only show tasks with completed value of true
        shownTasks = tasks.filter(task => task.completed);
        // if filter mode incomplete
    } else if (filterMode === "incomplete") {
        // only show tasks with completed value of false
        shownTasks = tasks.filter(task => !task.completed);
        // if filter mode is all
    } else {
        // show all tasks complete or not
        shownTasks = tasks;
    }


    // if there is a searchword, filter shownTasks, checking if the task object's text value lowercased contains the searchtext value lowercased  
    if (searchText !== "") {
        shownTasks = shownTasks.filter(task => task.text.toLowerCase().includes(searchText.toLowerCase()));
    }

    // if there are no shown tasks
    if (shownTasks.length === 0) {
        // create an element
        const p = document.createElement("p");
        // give it the text no tasks found
        p.textContent = "No tasks found";
        // append it as a child element to list
        list.appendChild(p);

        return;
    }

    // if there are tasks, loop through the filtered task list
    for (let task of shownTasks) {
        // create a new list item element
        const li = document.createElement("li");
        // assign the task's text value to the li's text content
        li.textContent = task.text;

        // check whether task is completed and if so apply style line through
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        // check if there is a search value and if it matches that task text value
        if (searchText !== "" && task.text.toLowerCase().includes(searchText.toLowerCase())) {
            // if so apply a background color
            li.style.backgroundColor = "lightgrey";
        } else {
            // else remove that background color
            li.style.backgroundColor = "";
        }

        // click event for li so clicking it calls the toggle function and the render function so the visual state updates 
        li.addEventListener("click", () => {
            // pass in task's id to target it
            toggleCompleted(task.id);
            // call to update the visual state again of task list
            renderTasks();
        })

        // append li to list element
        list.appendChild(li);

    }


}
// when script first runs?
loadTasks();
loadFilter();
loadSearchText();
renderTasks();



// Why is it better to calculate task statistics from tasks each render instead of manually incrementing and decrementing separate counters?

// a: tasks is the main source of truth. if one calculates the counts from tasks each render, the numbers will always match the real data. manually incrementing and decrementing will become harder to track and fall out of sync. one source of truth, derive everything else from it


// What is the difference between tasks and shownTasks?

// a: tasks is the full original data set. shownTasks is the currently visible subset after applying the active filter mode and search text


// Why does search happen after the filter mode is applied?

// a: first decide te broader group of tasks to work with, and then narrow it down further using the search text. flow is: choose the category of results, then narrow within that category


// Why is clicking a task and then calling renderTasks() not recursion?

// a: because rendertasks is not repeatedly calling itself, a user click triggers an event listener, which updates the data, and then calls the function once to redraw the UI. this is event driven rerendering