var readlineSync = require("readline-sync");
var score = 0;
function welcomeUser()
{
var userName=readlineSync.question('What is your name?\n')
console.log("Hey "+userName)
console.log("Lets play a game to check how much you know about Harry Potter Series\n")
 
}
var list = [{
  question: "Real name of Harry Potter\n",
  answer: "Daniel Radcliffe",
},
{
  question: "Sister of Ronald Weasley?\n",
  answer: "Ginny Weasley",
},
{
  question: "How many series are made upon Harry Potter?\n",
  answer: "8",
},
{
  question: "At the time of Hogwarts admission Age of Harry is ?\n",
  answer: "11",
},
{
  question: "In Quidditch game harry played as\n",
  answer: "Seeker",
}
];
function check(question, answer) {
  var userAns = readlineSync.question(question)
  if (userAns.toUpperCase() == answer.toUpperCase()) {
    console.log("Right!")
    score++;
    console.log("Score->" + score)
  }
  else {
    console.log("Wrong!")
    // score--;
    console.log("score->" + score)
  }
}
function results() {
  for (var i = 0; i < list.length; i++) {
    var quizQuestion = list[i];
    check(quizQuestion.question, quizQuestion.answer)
  }
  scores();
}
function scores() {
  console.log("---------------\n---------------\n");
  console.log("Your finall score is\n" + score);
  console.log("You can also check the score list");
}
welcomeUser();
results();
check();
