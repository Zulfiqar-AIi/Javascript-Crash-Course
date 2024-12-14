// Format for object declaration
const userFullName = {
    name: "Zulfiqar Ali",
    rollno: 40
}
//------------------------------------------------------------------------ 
// Format for function declaration
function userHalfName(userName="Jai"){
    if (!userName){
        console.log("Please enter your good name: ");
        return 0
    }
    else {
       return `${userName} just attended the lecture`
    }
}
                        // OR
const userUllah = function(username){
// console.log(username);
return username
}
// console.log(userHalfName("Ramesh"));
// console.log(typeof (userHalfName));
// console.log(userHalfName());
// Second method for function declaration
// -----------------------------------------------------------------------
// Format for array declaration
const myNewArray = [1, 2, 3, 4, 5];
// console.log(myNewArray);
// -----------------------------------------------------------------------
// Format for this function used in objects only not in functions
const user = {
    name: "ali",
    rollno: 40,
    section: "a1",
    myUser: function(){
        // console.log(`${this.name}, is the user now!`);
    }  
}
user.myUser()
// -----------------------------------------------------------------------
// Format for arrow function (Explicit Function)
const newUser = (num1, num2) => {
    // console.log("Jawab nhi hai mera");  
    return num1 + num2                
}
                  // OR
        //   Immediately invoked function (Iss mein sirf 5 print horha hai,
        // baki functions mein 30 print horha hai)
((num1, num2) => {
    // console.log("Jawab hi aur hai mera");
    return num1 + num2 
})
// console.log((25,5));
// console.log(newUser(25,5))
// ----------------------------------------------------------------------
// Format for arrow function (Implicit Function)
const newUserr = (num1, num2) => ( num1 + num2 ) // can be written in one line only
// console.log(newUserr(25,5))
// -----------------------------------------------------------------------
// Format for if/else (Explicit if/else)
if (3>3) {
    console.log("ji haan");
} else {
    // console.log("bilkul nhi");
}
// console.log("Ye text bahir hai if/else statement se");
                // OR
// Format for if/else (Implicit if/else)
// if (2<3) console.log("Haan na bhai samaj ja na"), console.log("Ye text bhi bahir hai if statement se");
// -----------------------------------------------------------------------
// Format for ternary operator (?) (works as if/else statement)
let val1 = 100;
// val1 > 110 ? console.log("bara hai") : console.log("chota hai");
// -----------------------------------------------------------------------
// Format for nullish coalescing operator (??) 
let value2;
value2 = 100 ?? 12;
value2 = null ?? 15;
value2 = undefined ?? 20;
// console.log(value2);
// ------------------------------------------------------------------------
// Format for (break and continue) using for loop
for (let i = 1; i <= 10; i++) {
    // const element = array[i];
    if (i == 5) {
        // console.log(`${i} is deducted`);
        // break;
        continue;
    }
    // console.log(`Values of array are written as ${i}`);
}
// -------------------------------------------------------------------
// Format for (for of) loop
const greetings = "Hello World! Farguni Pathak"
let i;
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Value is ${greet}`);
}
// ---------------------------------------------------------------------
