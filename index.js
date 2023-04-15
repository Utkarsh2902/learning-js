var readlineSync=require("readline-sync");
var ques;
function fun1(ans)
{
  var ques=readlineSync.question('what is my name\n');
return ques
}
for(var i=0;i<5;i++)
  {
    console.log(fun1("Utkarsh"));
  }
