// Function to calculate total cost and balance
function calculateCost() {
    const roomRate = document.getElementById('room-type').value === 'delux' ? 2500 : 4000;
    const amenitiesCost = (document.getElementById('amenities').value === 'ac' ? 1000 : 0) +
      (document.getElementById('amenities').value === 'locker' ? 300 : 0);
    const totalDays = parseInt(document.getElementById('total-days').value);
    const totalRoomCost = roomRate * totalDays;
    const totalAmenitiesCost = amenitiesCost * totalDays;
    const totalCost = totalRoomCost + totalAmenitiesCost;
    const advanceAmount = parseInt(document.getElementById('advance-amount').value);
    const balance = totalCost - advanceAmount;
    
    document.getElementById('total-room-cost').value = totalRoomCost + '/-';
    document.getElementById('total-amenities-cost').value = totalAmenitiesCost + '/-';
    document.getElementById('total-cost').value = totalCost + '/-';
    document.getElementById('balance').value = balance + '/-';
  }
  
  // Attach event listener to the form's submit event
  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example
    calculateCost();
  });
  
  // Initial calculation on page load (optional)
  calculateCost();
  
  // ... Existing JavaScript code ...
  
  // Function to show the pop-up box and change background image
  function showPopup() {
    // Show the overlay and pop-up
    document.getElementById('overlay').style.display = 'flex';
  
   
  }
  
  // Function to close the pop-up box
  function closePopup() {
    // Hide the overlay and pop-up
    document.getElementById('overlay').style.display = 'none';
  
    
  }
  
  // Attach event listener to the "Book Now" button
  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example
    calculateCost();
    showPopup();
  });
  
  // Attach event listener to the "Close" button in the pop-up box
  document.getElementById('close-popup').addEventListener('click', closePopup);