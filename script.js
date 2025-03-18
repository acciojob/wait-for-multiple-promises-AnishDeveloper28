document.addEventListener("DOMContentLoaded", function () {
    const outputTable = document.getElementById("output");
    
    function createPromise(index) {
        return new Promise((resolve) => {
            const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }
    
    function waitForPromises() {
        outputTable.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';
        
        const promises = [createPromise(1), createPromise(2), createPromise(3)];
        
        const startTime = performance.now();
        
        Promise.all(promises).then(results => {
            const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
            outputTable.innerHTML = "";
            
            results.forEach(result => {
                const row = `<tr><td>Promise ${result.index}</td><td>${result.time}</td></tr>`;
                outputTable.innerHTML += row;
            });
            
            const totalRow = `<tr><td>Total</td><td>${totalTime}</td></tr>`;
            outputTable.innerHTML += totalRow;
        });
    }
    
    waitForPromises();
});