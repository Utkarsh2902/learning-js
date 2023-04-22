
 var readlineSync=require("readline-sync");
 var score=0;
function invite()
{
var userName=readlineSync.question('What is your name?\n')
console.log("Hey "+userName)
console.log("Lets play a game to check how much you know about INDIA\n")
}
var quiz=[{
  question:"Which India city is also called the pink city?\n",
    answer:"Jaipur",
          },
          {
  question: "Which state has the largest area?\n",
    answer:"Rajasthan",
          },
          { 
  question: "National bird of India?\n",
    answer: "Peacock",
          },
          {
  question: "Which city is closet to the geographical center of India?\n",
    answer: "Nagpur",
          },
          {
  question:"Which state has the largest population?\n",
    answer:  "UttarPradesh",
          }
];
function results(question,answer)
{
  var userAns=readlineSync.question(question)
      if(userAns.toUpperCase()==answer.toUpperCase())
      {
        console.log("Nice!")
        score++;
        console.log("Score->"+ score)
      }
  else
      {
        console.log("Oops")
        score--;
        console.log("score->"+ score)
      }
}
function game(){
  for(var i=0;i<quiz.length;i++)
    {
      var current=quiz[i];
      results(current.question,current.answer);
    }
 showResults();
}
function showResults()
{
    console.log("---------------\n---------------\n");
   console.log("Your finall score is\n"+score);
   console.log("You can also check the score list");
}
invite();
game();
results();
