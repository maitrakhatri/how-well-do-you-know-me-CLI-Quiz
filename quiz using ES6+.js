const readlineSync = require('readline-sync'); //used const and let, previously all were var

const playerName = readlineSync.question("Enter your Name: ");

console.log(`Welcome ${playerName} !!`) //used string literals for all console logs with variables
console.log("Let's see how well do you know Maitra")

let score = 0
const highestScore = [

  {
    name: "Maitra",
    theirScore: 6
  },

  {
    name: "Rhutvi",
    theirScore: 5
  }
]

const questions = [
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

//replaced normal function by arrow function

const play = currentQue => {
  const userAns = readlineSync.question(currentQue.que)
  if (userAns === currentQue.ans) {
    console.log("You are correct !!")
    score = score + 1;
    console.log(`Your current Score: ${score}`);
    console.log("---------------------")
  }
  else {
    console.log("You are incorrect :(")
    console.log(`Your current Score: ${score}`);
    console.log("---------------------")
  }
}

//used map instead of for loop for questions

questions.map(play)

console.log(`Your final score is: ${score}`);
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
