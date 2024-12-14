// console.log("Hello");
let value=3;
let negValue=-value;
// console.log(negValue);

// console.log("2" + 3);
// console.log(true + "3");

let bigNumber = 3782372372827372883433366776764n;
// console.log(typeof bigNumber);

// const stringno = toString (rollno)
// console.log(typeof stringno);
// console.log(`Hello bhai ${name} Jan ye lelo warna ${rollno}`);
// const name = " Jalebi";
// const rollno = 21;
// console.log("Hello bhai" + name + " Jan ye lelo warna" + rollno.toString());
// console.log(typeof rollno);
// console.log(typeof name);

const name = "Jalebi";
const rollno = 21;
// const rolly = rollno + "";
const rahul = String(rollno);
// console.log("Hello bhai " + name + " Jan ye lelo warna " + rahul);
// console.log(typeof rahul);

const newNum = 1000000;
// console.log(newNum.toLocaleString());

let createdDate = new Date("11-27-2023");
// console.log(createdDate.toLocaleString());

// Below both are the representation of implementing a object
const newObj = new Object()
newObj.name = "Janali"
newObj.rollno = 40
newObj.subject = "Chemistry"
// console.log(newObj);

const newObj1 = {
    name: "Janali",
    rollno: 40,
    subject: "Chemistry"
}
// console.log(newObj1);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: function(){
            firstname: "hitesh"
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


function addTwoNumbers(num1, num2){

    // let result = number1 + number2
    // return result
    // console.log("Jaan hai tou jahan hai");
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        console.log("Inputs are numbers and are added shown below");
        return num1 + num2;
    } else {
        console.log("Please provide valid numbers.");
        return null;
}
}
// const result = addTwoNumbers(25, 2)
// console.log("Result: ", result);

const userUser = {
    // popi: console.log("jaan hai tou jahan hai")
}
// console.log(userUser);

const coding = ["js", "python", "java", "cpp"]
// coding.forEach( function (item){
//     console.log(item);
// })
