"use strict";

// get scores - loop until user enters a number
const scores = [];
let count = 0;

while(count < 4){
    scores[count] = parseFloat(prompt("Enter score: ", 80.0));
    if(!isNaN(scores[count]) && (scores[count] >=0 ) && (scores[count] <=100)){
        count++;
    }
}

let sum = 0;

for(let i = 0; i<4; i++){
    sum+= scores[i];
}

let average = (sum/4);
let max = scores.reduce(function(a,b){
    return Math.max(a,b);
}, 0);

for(let i =0; i<scores.length; i++){
    document.write(`<h4><label> Score ${i}: ${scores[i]}</label></h4>`);
}

document.write(`<h4><label> Average score is ${average.toFixed(0)}</label></h4>`);
document.write(`<h4><label> Highest score is ${max.toFixed(0)}</label></h4>`);

