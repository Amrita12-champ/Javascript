
let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

// 1. push() - Adds an element at the end
fruits.push("Orange");
console.log("After push():", fruits);

// 2. pop() - Removes the last element
fruits.pop();
console.log("After pop():", fruits);

// 3. unshift() - Adds an element at the beginning
fruits.unshift("Grapes");
console.log("After unshift():", fruits);

// 4. shift() - Removes the first element
fruits.shift();
console.log("After shift():", fruits);

// 5. toString() - Converts array to string
console.log("toString():", fruits.toString());

// 6. concat() - Joins two arrays
let vegetables = ["Potato", "Tomato"];
let food = fruits.concat(vegetables);
console.log("After concat():", food);

// 7. slice() - Returns a portion of the array
console.log("slice(1,3):", food.slice(1, 3));

// 8. splice() - Adds/Removes elements
food.splice(2, 1, "Pineapple");
console.log("After splice():", food);

// 9. indexOf() - Finds the index of an element
console.log("Index of Mango:", food.indexOf("Mango"));

// 10. includes() - Checks if an element exists
console.log("Includes Apple?", food.includes("Apple"));

// 11. reverse() - Reverses the array
food.reverse();
console.log("After reverse():", food);

// 12. sort() - Sorts the array alphabetically
food.sort();
console.log("After sort():", food);

// 13. join() - Joins elements with a separator
console.log("join('-'):", food.join("-"));

// 14. length - Number of elements
console.log("Length of Array:", food.length);