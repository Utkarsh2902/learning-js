
var readlineSync=require("readline-sync");
// var N=readlineSync.question('Please enter the number')

var superman={
color: "red",
  design: "funny",
  strength: "50%"
};
  var batman={
    color: "black",
    design: "cool",
    strength: "35%"
  };
console.log(superman.strength);
console.log(batman.strength);
console.log(superman.strength>batman.strength?superman.color:batman.color);


