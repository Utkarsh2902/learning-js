 var readlineSync=require("readline-sync"); 
// console.log("my name is Utkarsh gupta");
var score=0;
var userAge=readlineSync.question('what is your age?\n');
var userAdd=readlineSync.question('where do you live?\n');
if(userAge>=25)
{
  if(userAdd=="bsr")
  {
   score++;
  }
}
else
{
  score--;
}
console.log(score);

//var userFriend=readlineSync.question('what is your friends name');
// var details="hey"+userName;
// console.log(details);
// if(userName=="Utkarsh")
// {
//   score++;
// }
// else
// {
//   score--;
// }
// console.log(score);
