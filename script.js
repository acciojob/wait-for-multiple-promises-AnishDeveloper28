// Function to create a promise that resolves after a random delay
function createPromise() {
  const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay.toFixed(3)); // Resolve with the delay time rounded to 3 decimal places
    }, delay * 1000); // Convert seconds to milliseconds
  });
}

// Array to hold the three promises
const promises = [createPromise(), createPromise(), createPromise()];

// Wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    // Get the table body element
    const output = document.getElementById("output");

    // Clear the loading row
    output.innerHTML = "";

    // Add rows for each promise result
    results.forEach((time, index) => {
      const row = document.createElement("tr");
      const promiseName = document.createElement("td");
      const timeTaken = document.createElement("td");

      promiseName.textContent = `Promise ${index + 1}`;
      timeTaken.textContent = time;

      row.appendChild(promiseName);
      row.appendChild(timeTaken);
      output.appendChild(row);
    });

    // Calculate the total time (maximum time among all promises)
    const totalTime = Math.max(...results).toFixed(3);

    // Add the total row
    const totalRow = document.createElement("tr");
    const totalName = document.createElement("td");
    const totalTimeTaken = document.createElement("td");

    totalName.textContent = "Total";
    totalTimeTaken.textContent = totalTime;

    totalRow.appendChild(totalName);
    totalRow.appendChild(totalTimeTaken);
    output.appendChild(totalRow);
  })
  .catch((error) => {
    console.error("Error:", error);
  });