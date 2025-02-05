let str='abcaab'
//remove duplicates from stringn using map function


let str1 = str.split('').filter((item, index, arr) => arr.indexOf(item) === index).join('')
console.log(str1)

// create a arrow function taing two paremeters and return the sum of two numbers
let sum = (a,b) => a+b


