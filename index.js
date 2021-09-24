var readlineSync = require('readline-sync');

var playerName = readlineSync.question("Enter your Name: ");

console.log("Welcome " + playerName + " !!")
console.log("Let's see how well do you know Maitra")

var score = 0
var highestScore = [

  {
    name: "Maitra",
    theirScore: 6
  },

  {
    name: "Rhutvi",
    theirScore: 5
  }
]



//var questions = [que1,que2,que3, que4]

var questions = [
  {
    que: "What's my full name?: ",
    ans: "Khatri Maitra Bharatbhai"
  },

  {
    que: "When's my Birthday?: ",
    ans: "3rd May"
  },

  {
    que: "What do I study?: ",
    ans: "IT Engineering"
  },

  {
    que: "Do I like Coding?: ",
    ans: "yes"
  },

  {
    que: "Is it true that I love writing: ",
    ans: "yes"
  },

  {
    que: "What is my Podcast's Name: ",
    ans: "The Maitra Khatri Show"
  }


]



function play(currentQue) {
  var userAns = readlineSync.question(currentQue.que)
  if (userAns === currentQue.ans) {
    console.log("You are correct !!")
    score = score + 1;
    console.log("Your current Score: ", score)
    console.log("---------------------")
  }
  else {
    console.log("You are incorrect :(")
    console.log("Your current Score: ", score)
    console.log("---------------------")
  }
}

for (i = 0; i < questions.length; i++) {
  var currentQue = questions[i];
  play(currentQue)
}

console.log("Your final score is: ", score)
console.log("---------------------")
console.log("Share this and challenge your friends who claim to know Maitra better than you")

if (score === questions.length) {
  console.log("---------------------")
  console.log(" Yaaay !! you score FULL MARKS !!")
}

console.log("---------------------");
console.log("Check out the Leaderboard: ", highestScore)
console.log("---------------------")
console.log("Screenshot me your score to take your position on the Leaderboard")