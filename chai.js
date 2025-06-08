function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // in ml
  const milkPerCup = 50; // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2; // in teaspoons

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
  console.log("Enjoy your Chai Bora!");
}

// Prompt the user for input and run the function
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(userInput);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}