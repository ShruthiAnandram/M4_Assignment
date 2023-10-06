let coinFlip;

let iter = Number(prompt("Please enter the no of iterations"));
for (i = 1; i <= iter; i++) {
    coinFlip = Math.round(Math.random());
    // document.write(`${coinFlip}`);

    if(coinFlip >= 1) {
        document.write("Tails"+"<br>");
    }
    else {
        document.write("Heads"+"<br>");
    }
}