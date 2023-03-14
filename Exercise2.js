
// Part1
const Friends = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, and ${name3}!`);
  }

Friends("Jo", "J", "Jan");


//Part2
const ageCal = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const yourAge = currentYear - birthYear;
    return yourAge;

}
const age = ageCal(1987);
console.log(`Your age is ${age}`);




function nameAges(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
  const age1 = ageCal(birthYear1);
  const age2 = ageCal(birthYear2);
  const age3 = ageCal(birthYear3);
  
  console.log(`Welcome ${name1}, you are ${age1}.`);
  console.log(`Welcome ${name2}, you are ${age2}.`);
  console.log(`Welcome ${name3}, you are ${age3}.`);
}

nameAges("A", 1995, "B", 1987, "C", 1975);
