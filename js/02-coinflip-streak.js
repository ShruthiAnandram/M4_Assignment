let coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if(coinFlip  >= 1) {
        document.write("Tails"+"<br>");
    }
    else {
        document.write("Heads"+"<br>");
    }
} while (coinFlip == 0);