function updateVisitorCount() {
    // Retrieve the current count from localStorage or initialize it to 0
    let count = parseInt(localStorage.getItem('visitorCount')) || 0;
    
    // Increment the count by one
    count++;
    
    // Update the count in localStorage
    localStorage.setItem('visitorCount', count);
    
    // Display the count on the webpage
    document.getElementById('counter').textContent = count;
}

// Call the updateVisitorCount function initially
updateVisitorCount();

// Function to reset the count after every minute
function resetCount() {
    // Reset the count to 0
    localStorage.setItem('visitorCount', 0);
    
    // Display the count on the webpage
    document.getElementById('counter').textContent = 0;
}

// Update the count every time the site is opened
updateVisitorCount();

// Reset the count every minute
setInterval(resetCount, 60000); // 60000 milliseconds = 1 minute
