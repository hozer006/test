// Question 1
function calDifference(msg: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < msg.length; i++) {
    const char = msg[i].toLowerCase();
    if (vowels.indexOf(char) !== -1) {
      vowelCount++;
    } else if (char >= 'a' && char <= 'z') {
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
function isDigisible(n: number): boolean {
  const digits: number[] = [];
  let num = n;
  let product = 1;
  while (num > 0) {
    const digit = num % 10;
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
function getHandScore(input: string): number {
  const cards: string[] = input.split(' ');
  const suits: Record<string, string[]> = { S: [], C: [], D: [], H: [] };
  let rankTriple: boolean = false;
  let score: number = 0;

  cards.forEach((card: string) => {
    const suit: string = card.charAt(0);
    const rank: string = card.substring(1);

    suits[suit].push(rank);

    if (suits[suit].length === 3) {
      const suitScore: number = suits[suit].reduce((acc: number, val: string) => {
        if (isNaN(parseInt(val))) {
          return acc + 10;
        } else {
          return acc + parseInt(val);
        }
      }, 0);

      if (suitScore === 30) {
        score += 35;
      } else {
        score += 32.5;
      }
      rankTriple = true;
    }
  });

  if (!rankTriple) {
    const maxSuitScore: number = Math.max(
      suits.S.reduce((acc: number, val: string) => isNaN(parseInt(val)) ? acc : acc + parseInt(val), 0),
      suits.C.reduce((acc: number, val: string) => isNaN(parseInt(val)) ? acc : acc + parseInt(val), 0),
      suits.D.reduce((acc: number, val: string) => isNaN(parseInt(val)) ? acc : acc + parseInt(val), 0),
      suits.H.reduce((acc: number, val: string) => isNaN(parseInt(val)) ? acc : acc + parseInt(val), 0)
    );
    score = maxSuitScore;
  }

  return score;
}

console.log("Output Question 3");
console.log(getHandScore("S8 S10 CA")); // 18
console.log(getHandScore("SJ S10 SA")); // 31
console.log(getHandScore("S2 D2 H2")); // 32.5
console.log("\n");

