// Ex 1: Remove duplicates

// input: [1,2,2,3,4,4,5]

// output: [1,2,3,4,5]

// hint: set, filter or using object to track seen values

// answer:

const input = [1, 2, 2, 3, 4, 4, 5];


// set:
const set = new Set(input);
console.log("Set remove dupes: ", set, "\n");


// filter:
const filtered = input.filter((item, index) => {
    return input.indexOf(item) === index;
})

console.log("Filter remove dupes: ", filtered, "\n");


// object track seen values:
let seen = {};
let unique = [];

input.forEach(item => {
    if (!seen[item]) {
        unique.push(item);
        seen[item] = true;
    }
})

console.log("use object track seen: ", seen, "\n", unique, "\n");



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


const input2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = {};

// input2.forEach(item => {
//     count[item] = (count[item] || 0) + 1;
// })

// console.log("using forEach: ", count, "\n");



// loop
const count2 = {};

for (let item of input2) {
    count2[item] = (count2[item] || 0) + 1;
}
console.log("using a loop: ", count2, "\n")



// reduce
const itemCount = input2.reduce((accumulator, currentVal) => {
    accumulator[currentVal] = (accumulator[currentVal] || 0) + 1;
    return accumulator;
}, {});

console.log("using reduce: ", itemCount, "\n");




// ex 3: flatten nested arrays

// input: [1,[2,3],[4,[5,6]]]

// output: [1,2,3,4,5,6]


// answer: 

const input3 = [1, [2, 3], [4, [5, 6]]];

// recursion

// dont really know this



// .flat()
console.log("nested array flattened with flat method: ", input3.flat(input3.length), "\n")


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

let tasks = [];

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


function addTask(text) {
    const newTask = {
        id: tasks.length + 1,
        text: text,
        completed: false
    };

    tasks.push(newTask);
}



// stretch challenge write toggleTask(id) that flips completed between true and false

function toggleTask(id) {
    for (let t of tasks) {
        if (t.id === id) {
            t.completed = !t.completed;
        }
    }
}



addTask("Buy milk");
addTask("Walk dog");

console.log("tasks array after pushing two tasks: ", tasks, "\n");



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

const fruits = ["apple", "banana", "apple"];
let counts = {};

// loop over items
for (let fruit of fruits) {
    // do something with each item
    if (counts[fruit]) {
        // push into new result
        counts[fruit] += 1;
    } else {
        // do something with each item
        // push into new result
        counts[fruit] = 1;
    }
    // same as: counts[fruit] = (counts[fruit] || 0) + 1;
}

console.log("fruit counts: ", counts, "\n");


