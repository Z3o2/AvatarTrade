// Function to update the visitor count every minute
function updateVisitorCount() {
    // Retrieve the last updated timestamp from localStorage
    let lastUpdated = parseInt(localStorage.getItem('lastUpdated')) || 0;
    let currentTime = Date.now();
    
    // If a minute has passed since the last update, reset the count to 0
    if (currentTime - lastUpdated >= 60000) {
        localStorage.setItem('visitorCount', 0);
        lastUpdated = currentTime;
        localStorage.setItem('lastUpdated', lastUpdated);
    }
    
    // Retrieve the current count from localStorage or initialize it to 0
    let count = parseInt(localStorage.getItem('visitorCount')) || 0;
    
    // Increment the count
    count++;
    
    // Update the count in localStorage
    localStorage.setItem('visitorCount', count);
    
    // Display the count on the webpage
    document.getElementById('counter').textContent = count;
}

// Call the updateVisitorCount function initially
updateVisitorCount();

// Update the count every minute
setInterval(updateVisitorCount, 1000); // Check every second for better accuracy
