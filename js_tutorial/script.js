/*const profile = {
     username : "not_a.dev",
     isFollow : false,
     Followers : 20,
     Following : 24,
     posts : 0,
     Bio : "life is unfair"


};

console.log(profile);


let age = "5";
if (age>18){
    console.log(" adult");
}
else if (age == 18){
    console.log("valid");
} else {
    console.log("not adult");
};


const displayDateTime = () => {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
  
    console.log(`Today is: ${day}.`);
    console.log(`Current time is: ${displayHours}:${minutes}:${seconds} ${ampm}`);
  };
  
  displayDateTime();
  


  //username on their name+name.lenght

 // let fullName = prompt("enter your full name without space:");
//let result = (` @${fullName}${fullName.length}`);
//console.log(result);

let marks = [88,76,77,65,99,56,34];
sum = 0;
for (let val of marks){
    sum += val;
};
console.log(sum);
avg = sum/marks.length;
console.log(`avg marks is : ${avg}`);

// all items have an offer of 10% on them .change array to store final price after applying the offer.

//let items = [ 300, 600,500, 900 ,50];
for(i=0; i< items.length; i++) {
    console.log(`before discount: ${items[i]}`);
    let offSDer = items[i]/10;
    items[i] -= offer;
    console.log(`after discount ${items[i]}`);
}

let company = ["Amazon", "Google","Meta", "Netflix","Microsoft","Samsung"];
console.log(company);
console.log(company.shift());
console.log(company);
console.logrt(company.splice(1,1,"Facebook"));
console.log(company);
company.push("Amazon");
console.log(company);


let str =prompt("enter the string in one case");
console.log(str);
if (str === str.toLowerCase()){
    console.log("changing the case of string....");
    console.log(str.toUpperCase());

} else{
    console.log("changing the case of string....");
    console.log(str.toLowerCase());
}
// Function to change the case of each character in a string

function toggleCase(str) {
    let toggledStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            toggledStr += char.toLowerCase();
        } else {
            toggledStr += char.toUpperCase();
        }
    }
    return toggledStr;
}

// Example usage:
let stringToToggle = prompt("Enter the string");
console.log("Original String:", stringToToggle);
console.log("After toggling case:", toggleCase(stringToToggle))

function removeCharacter(str, postion){
       return str.slice(0, postion) + str.slice(postion+1);
}
let originalString = "HelloWorld";
let position = 5;
console.log("Original String:", originalString);
console.log("After removing character at position", position + ":", removeCharacter(originalString, position));
*/

//. Write a JavaScript program to compute the sum of elements of a given array of integers.
function sumArray(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        console.log(array[i]);
        sum += array[i];
    }  return sum;
};

 console.log(sumArray([1,2,4]));