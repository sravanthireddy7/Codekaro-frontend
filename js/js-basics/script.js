// console.log('Hello, World!');

let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// 1. Accessing specific value
//write js code to fetch the first item in the grocery items list

console.log(shoppingList[0])

// 2. **Implementing `push` Method:**
// - Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.

shoppingList.push('Carrots')
console.log(shoppingList)

// 3. **Implementing `pop` Method:**
// Write JavaScript code to remove the last item from the grocery items list. Log the updated grocery items list before and after removing the last item.

console.log(shoppingList)
shoppingList.pop()
console.log(shoppingList)



// 4. Implementing `spilice' method
// Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" 
// in their place. Log the updated grocery items list before and after the splice operation

console.log(shoppingList[4])
shoppingList[4].splice(1, 2, 'Cucumbers', 'Bell Peppers')
console.log(shoppingList[4])

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

//1. Fetching Specific Value:
// Write JavaScript code to fetch the student's name

console.log(student.name)

//2. Adding value
// Write JavaScript code to add a new property phone with the value "123-456-7890" to the student object. Log the updated student object.

student.phone="123-456-7890"
console.log(student)

// 3. Removing value
// Write JavaScript code to remove the grade property from the student object. Log the updated student object before and after removing the grade property.

delete student.grade
console.log(student)

//4.Modifying value
// Write JavaScript code to modify the student's age to 21. Log the updated student object.

student.age=21
console.log(student)


// Conditionals assignment
//Task 1: Understanding if statements
//Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if its less than 0,
//  and "Zero" if its equal to 0.

let inpNum=prompt("Enter a number: ")
inpNum>0?console.log("Positive"):inpNum<0?console.log("Negative"):console.log("Zero")

//Task 2: Implementing elseif statements
// Create a JavaScript program that evaluates a student's grade based on their score. 
// The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, 
// "C" if it's between 70 and 79 "D" if it's between 60 and 69, and "F" if the score is below 60.

let score=prompt("Enter your score: ")
if(score>=90 && score<=100){
    console.log("A")
}
else if(score>=80 && score<=89){
    console.log("B")
}
else if(score>=70 && score<=79){
    console.log("C")
}
else if(score>=60 && score<=69){
    console.log("D")
}
else{
    console.log("F")
}

//Task 3: Exploring Truthy/Falsy consepts:
// Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.

let str=prompt("Enter a string: ")
str?console.log("Truthy"):console.log("Falsy")