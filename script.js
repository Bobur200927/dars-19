
let shirtColor = "red";
shirtSize = "xxl";

let shirt = {
    color: "red",
    size: "xxl",

    // Method
    sayHello: function () {
        return "hiiiii"
    }
}

console.log(shirt.sayHello());
// console.log(shirt['color']);

// function sayHello () {
//     return "Hello EveryOne"
// }

// console.log(sayHello());



// ? Ma'lumotlar turlari
// number
// boolean
// string
// undefined
// null
// object

let str = 'Bittali qoshtirnoq';
let str1 = "Bittali \\ 'qoshtirnoq'";
// Bittali qoshtirnoq
// 0123456789

let str2 = 
`bektik orqali
string
yasash`;


// ? String property
console.log(str.length);

// ? String methods
// charAt()
// console.log(str.charAt(6));

// at()
// console.log(str.at(6));

// slice()
console.log(str[0]);
let slicedStr = str.slice(-10, -1)
console.log(slicedStr);


// substring()
let nuwSub = str.substring(8, str[length-1])
console.log(nuwSub);

// substr()
let substrNew = str.substr(8, 5)
console.log(substrNew);


// toLowerCase()
console.log(str.toLowerCase());

// toUpperCase()
console.log(str.toUpperCase());

// Concat
let a = "hello          ";
let b = " world                ";
let z = "war";
let x = a.concat(b, z);
console.log(a + b + z);


// Trim()
console.log(a.length);


// Repeat()
console.log(z.repeat(5));


// replace()

let word = "alik yaxshimisiz alik";
let newOne = word.replace("alik", "salom");
let newAll = word.replaceAll("alik", "salom");
console.log(newAll);

// Split()
let newArr = word.split(',')
console.log(newArr);


let arr = [{name: "Bobur"}, {name: "Daler"}, {name: "Amir"}];
