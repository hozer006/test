// Question 1
function calDifference(msg) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;
    var consonantCount = 0;
    for (var i = 0; i < msg.length; i++) {
        var char = msg[i].toLowerCase();
        if (vowels.indexOf(char) !== -1) {
            vowelCount++;
        }
        else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }
    return Math.abs(consonantCount - vowelCount);
}
console.log("Output Question 1");
console.log(calDifference("aeiou")); // 5
console.log(calDifference("you rocks!")); // 2
console.log("\n");
// Question 2
function isDigisible(n) {
    var digits = [];
    var num = n;
    var product = 1;
    while (num > 0) {
        var digit = num % 10;
        if (digit === 0 || digits.includes(digit) || n % digit !== 0) {
            return false;
        }
        digits.push(digit);
        product *= digit;
        num = Math.floor(num / 10);
    }
    return true;
}
console.log("Output  Question 2");
console.log(isDigisible(12)); // true
console.log(isDigisible(212)); // false
console.log(isDigisible(204)); // false
console.log(isDigisible(234)); // false
console.log(isDigisible(396)); // true
console.log("\n");
// Question 3
function getHandScore(input) {
    var cards = input.split(' ');
    var suits = { S: [], C: [], D: [], H: [] };
    var rankTriple = false;
    var score = 0;
    cards.forEach(function (card) {
        var suit = card.charAt(0);
        var rank = card.substring(1);
        suits[suit].push(rank);
        if (suits[suit].length === 3) {
            var suitScore = suits[suit].reduce(function (acc, val) {
                if (isNaN(parseInt(val))) {
                    return acc + 10;
                }
                else {
                    return acc + parseInt(val);
                }
            }, 0);
            if (suitScore === 30) {
                score += 35;
            }
            else {
                score += 32.5;
            }
            rankTriple = true;
        }
    });
    if (!rankTriple) {
        var maxSuitScore = Math.max(suits.S.reduce(function (acc, val) { return isNaN(parseInt(val)) ? acc : acc + parseInt(val); }, 0), suits.C.reduce(function (acc, val) { return isNaN(parseInt(val)) ? acc : acc + parseInt(val); }, 0), suits.D.reduce(function (acc, val) { return isNaN(parseInt(val)) ? acc : acc + parseInt(val); }, 0), suits.H.reduce(function (acc, val) { return isNaN(parseInt(val)) ? acc : acc + parseInt(val); }, 0));
        score = maxSuitScore;
    }
    return score;
}
console.log("Output Question 3");
console.log(getHandScore("S8 S10 CA")); // 18
console.log(getHandScore("SJ S10 SA")); // 31
console.log(getHandScore("S2 D2 H2")); // 32.5
console.log("\n");
