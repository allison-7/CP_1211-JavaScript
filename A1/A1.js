const student = "Written by Allison Power";
const caseCount = 100;
const costPerCase = 30;
let totalCost = caseCount*costPerCase;

document.write("<div>");
document.write("<div class = \"student\">");
document.write("<h2>" + student + "</h2>");
document.write("</div>");

document.write("<div class = \"cases\">");
document.write("<p> Case Count: " + caseCount + "</p>");
document.write("<p> Cost Per Case: " + costPerCase + "</p>");
document.write("<p> Total Cost: " + totalCost + "</p>");
document.write("</div>");
document.write("</div>");