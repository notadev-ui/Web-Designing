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
    let offer = items[i]/10;
    items[i] -= offer;
    console.log(`after discount ${items[i]}`);
}

let company = ["Amazon", "Google","Meta", "Netflix","Microsoft","Samsung"];
console.log(company);
console.log(company.shift());
console.log(company);
console.log(company.splice(1,1,"Facebook"));
console.log(company);
company.push("Amazon");
console.log(company);
*/

function sum(x,y){
    console.log(x+y);
};
