const readlinesync = require("readline-sync");

let score = 0;

function playQuiz(question, answer) {
  const userQuestion = readlinesync.question(question)
  if (userQuestion === answer) {
    console.log("You are right")
    score = score + 1
    console.log("-------------")
    console.log("Your current score is ", score)
  } else {
    console.log("You are wrong")
    console.log("-------------")
  }
}

const sequenceViseQues = [
  {
    question: `What's your Name May I know ? 
  a:ram,
  b:sham,
  c:jems`,
    answer: "jems"
  },
  {
    question: `How old you are ? 
  a:55,
  b:67,
  c:66`,
    answer: "55"
  },
  {
  question: `what's your favouorite meal ? 
  a:haldiram,
  b:chips,
  c:nuts `,
    answer: "nuts"
  },
  {
  question: `what's your Hobby ? 
  a:Cricket,
  b:Meditation,
  c:Music `,
    answer: "cricket"
  },
  {
  question: `are you married ? 
  a:Yes,
  b:No `,
    answer: "No"
  }
]

for (let i = 0; i < sequenceViseQues.length; i++) {
  let curr = sequenceViseQues[i];
  // console.log(curr.question, curr.answer)  
  playQuiz(curr.question, curr.answer)

}

console.log("Hey, You total score is ", score)
