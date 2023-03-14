

let rubric = (score) => {
    // Part1
    if (score >= 5) {
        // Part2
        if (score > 8) {
          console.log("Excellent");
        }
        // Part3
        if (score === 11) {
          console.log("Perfect");
        }
        return true;
      } else {
        return false;
      }
    }

console.log(rubric(11));

