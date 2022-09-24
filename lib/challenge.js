/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

// console.log('challenge.js has been included!');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */

let myFavoriteNumber = 15;

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */

const myName = "Anna";
let myAge = 35;
var favFood = "Pizza";

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let num = 5;
let addition = num + 1;
let subtraction = num -1;
let multiply = num * 5;
let divide = num / 1;
let whatsLeftOver = num % 2;

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */

let firstName = "Anna";
let lastName = "Nettles";
let myFullName = firstName + " " + lastName;

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

let word1 = "Hello";
let word2 = "world";
let message = `Hello world`;

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false

let exampleA = 4 == 5;
let exampleB = 4 === 4;
let exampleC = 4 !== "S";
let exampleD = 4 < 3;
let exampleE = 4 > 6;
let exampleF = 4 <= 5;
let exampleG = 4 >= 5;


/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so
 * that the statement evaluates to true.
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

// a _ b;

let example1 = a < 53;

// c _ d;

let example2 = c > d;

// 'Name' ___ 'Name';

let example3 = 'Name' === 'Name';

// a _ b ___ c;

let example4 = a < b < c;

// a _ a ___ d;

let example5 = (a === a) < d;

// e ___ 'Kevin';

let example6 = e == 'Kevin';

// 48 ___ '48';

let example7 = 48 == '48';


/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that
 * the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

// a _ b;

let subprompt1 = a > b;

// c _ d;

let subprompt2 = c > d;

// 'Peanut' ___ 'Peanut';

let subprompt3 = 'Peanut' !== 'Peanut';

// a _ b ___ c;

let subprompt4 = a < b < c;

// a _ a ___ d;

let subprompt5 = (a !== a) > d;

// e ___ 'Jelly Bean';

let subprompt6 = e !== 'Jelly Bean';

// 48 ___ '48';

let subprompt7 = 48 != '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2]);
console.log(array2[1][1]);
console.log(array3[1][1][1][0]);
/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4.at(-2));

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

thom[0] = 'Gameboy'

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

karolin[1] = 17;

// Change Cathleen's hometown from New York to "Gotham City".

cathleen[2] = "Gotham City";

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

kristyn[2] = "Oakland";