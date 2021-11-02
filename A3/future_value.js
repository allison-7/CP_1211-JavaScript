"use strict";

// get investment amount - loop until user enters a number
let investment=0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) || (investment<0) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) || (rate <= 0) || (rate >= 15) );

// get number of years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) || (years < 1));

// calulate future value
let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
    futureValue += futureValue * rate / 100;
}

// display results
/*document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);
*/
document.write(`<h4><label>Investment amount = </label> ${investment} <label>Interest rate = </label> ${rate} </label> Years = </label> ${years}</h4>`);
futureValue = investment;
let interestValue;
for (let i = 1; i <= years; i++ ) {
    futureValue += futureValue * rate / 100;
    interestValue = (investment * (1 + (rate /100) * i)) - investment; // I = A - P; A = P(* rt)
    document.write(`<p><label> Year=</label>${i} <label> Interest=</label>${interestValue} <label> Value=</label>${futureValue.toFixed(2)}<\p>`);
}