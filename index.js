// Ex 1: Remove duplicates

// input: [1,2,2,3,4,4,5]

// output: [1,2,3,4,5]

// hint: set, filter or using object to track seen values

// answer:

const input = [1,2,2,3,4,4,5];

// set
function removeDupes(items) {
    let set = new Set(items)
    return set;
}

console.log("Set - remove dupes: ",removeDupes(input), "\n");

// filter
const filteredItems = input.filter((item, index) => {
    return input.indexOf(item) === index;
})

console.log("Filter - remove dupes: ", filteredItems, "\n");