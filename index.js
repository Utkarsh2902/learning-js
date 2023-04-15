var readlineSync=require("readline-sync");
var score=0;
var ques;
var ans;
function ask(ques,ans)
{
  var userAsk=readlineSync.question(ques);
  
  if(userAsk==ans)
  {
    score++;
  }
  else
  {
    score--;
  }
  return score;
}
console.log(ask("what is my current stipend\n",10000));
// var score=0;
// var num1;
// var num2;
// var num3;
// function fun1(num1,num2)
// {
//   num3=num1+num2;
//   return num3;
// }
// console.log(fun1(1,3));
// //or
// var result=fun1(1,3);
// console.log(result);
