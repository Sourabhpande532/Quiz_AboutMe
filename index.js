let readLine = require("readline-sync");
let username = readLine.question("Hello,What is your name? ");
console.log("Hey "+ username +" Let's see how much you know sourabh")
let score = 0;
let totalScore = 0;
function ask(question,answer){
  let userAnswer = readLine.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You are right!");
    score++;
    
  }
  else{
    console.log("You are wrong!!");
    
    
  }
  console.log("Your score is "+ score );
  console.log("----------");
  totalScore++;
}

let questionOne="Where do Sourabh live? ";
let questionTwo = "Which lifestyle suitable for sourabh? ";
let questionThree = "Which outdoor game does Sourabh like to play? ";

ask(questionOne,"Bhiwapur");
ask(questionTwo,"Satvik");
ask(questionThree,"Cricket");

console.log("Hooray!!Your final score is "+ score + " out of "+ totalScore);