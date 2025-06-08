function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015; // 1.5%
  const fee = Math.min(Math.max(percentageFee, 10), 70); // Ensure fee is between 10 and 70
  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

// Prompt the user for the amount to send
const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(userInput);

// Validate input
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali ingiza kiasi sahihi cha kutuma.");
}
