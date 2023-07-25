var introScore = 0;
var extroScore = 0; 
var questionCount = 0;


//varaibles part 
var result = document.getElementById("result")
var restart = document.getElementById("restart")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//define 
q1a1.addEventListener("click", extrovert); 
q1a2.addEventListener("click", introvert); 
q2a1.addEventListener("click", introvert); 
q2a2.addEventListener("click", extrovert); 
q3a1.addEventListener("click", extrovert); 
q3a2.addEventListener("click", introvert); 
restart.addEventListener("click", clearResults);


function extrovert() {
  extroScore+=1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + "extroScore = "   + extroScore);
  if (questionCount == 3) {
      console.log("The quiz is done");
      updateResult();
  }
}


function introvert() {
  introScore+=1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + "introScore" + introScore);
  if (questionCount == 3) {
  console.log("The quiz is done");
      updateResult();
  }
}

function updateResult() {
    if (extroScore >= 2) {
        result.innerHTML = "You are an extrovert!";
        console.log("You are an extrovert!"); 
    } else if (introScore >= 2) {
        result.innerHTML = "You are an introvert!"
        console.log("You are an introvert!"); 
        }
}

function clearResults(){
    introScore = 0;
    extroScore = 0; 
    questionCount = 0;
    result.innerHTML = "You are a ..."
}