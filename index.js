/* 
@Challenge:
-use question list
-and function to put together a quiz*/

const readlineSync = require('readline-sync');
const userQuestion = readlineSync.question("Where do you live ?");
console.log(" Welcome to our Zone " + userQuestion)
let score = 0;
function play(question,answer){
const userQuestion = readlineSync.question(question);
  if(userQuestion === answer){
    console.log("You are Right !")
    score = score + 1;
    console.log("Current score is : ", score)
  }else{
    console.log("You are Wrong !")
  }
}

const questions = [
  {
  question: "is it city or town ?",
  answer: "town"
},{
  question:" which zone do you live ?",
  answer: "gopal sq"
},{
  question:" is it near tea house ?",
  answer: "yes"
}]

for (let i=0; i<questions.length; i++){
 const currOne = questions[i];
 play(currOne.question,currOne.answer) 
}

console.log(" YEH..YOU Scored Well : ", score)





/* let readLine = require("readline-sync");
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

console.log("Hooray!!Your final score is "+ score + " out of "+ totalScore); */