function calculateBodaFare(distanceInKm) {
  const baseFare = 50;          // Fixed base fare in KES
  const chargePerKm = 15;       // Cost per kilometer in KES

  const travelFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

// Prompt the user for distance input
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(userInput);

// Check if input is a valid number
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Tafadhali ingiza nambari sahihi ya kilomita.");
}
