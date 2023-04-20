import chalk from 'chalk';
var readlineSync=require("readline-sync");
var N=readlineSync.question('Please enter the number')

var string="";

for(var i=N;i>0;i--)
  {
    for(var j=i;j>0;j--)
      {
        string+="*";
      }
    string+="\n"
  }
// console.log(string);
for(var i=0;i<=N;i++)
  {
    for(var j=0;j<i;j++)
      {
        string+="*";
      }string+="\n"
  }
  console.log(string);
console.log(chalk.blue('babab'))