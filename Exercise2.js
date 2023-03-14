
// Part1
const Friends = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, and ${name3}!`);
  }

Friends("Jo", "J", "Jan");


//Part2
const ageCal = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const yourAge = currentYear - birthYear;
    return console.log(`Your age is ${yourAge}`);

}
ageCal(1987);


// Part3

