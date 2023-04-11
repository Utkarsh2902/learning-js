 var readlineSync=require("readline-sync"); 
// console.log("my name is Utkarsh gupta");
var userName=readlineSync.question('what is your name?'); console.log(userName);
//var userFriend=readlineSync.question('what is your friends name');
var score=0;
var details="hey"+userName;
console.log(details);
if(userName=="Utkarsh")
{
  score++;
}
else
{
  score--;
}
console.log(score);
