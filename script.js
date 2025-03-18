// Function to create a promise with random resolution time
function createPromise(name) {
  const timeTaken = Math.random() * (3 - 1) + 1; // Random time between 1 and 3 seconds
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name, time: timeTaken.toFixed(3) }), timeTaken * 1000)
  );
}

// Main function to handle promises
async function resolvePromises() {
  const output = document.getElementById("output");

  // Remove "Loading..." row
  output.innerHTML = "";

  try {
    const promises = [
      createPromise("Promise 1"),
      createPromise("Promise 2"),
      createPromise("Promise 3"),
    ];

    const results = await Promise.all(promises);

    // Populate table with resolved promises
    results.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });

    // Add Total row
    const totalRow = document.createElement("tr");
    const maxTime = Math.max(...results.map((res) => parseFloat(res.time)));
    totalRow.innerHTML = `<td>Total</td><td>${maxTime.toFixed(3)}</td>`;
    output.appendChild(totalRow);
  } catch (error) {
    console.error("Error resolving promises:", error);
  }
}

// Trigger promise resolution
resolvePromises();