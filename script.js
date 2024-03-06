// Function to update the visitor count every minute
function updateVisitorCount() {
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
setInterval(updateVisitorCount, 60000); // 60000 milliseconds = 1 minute
