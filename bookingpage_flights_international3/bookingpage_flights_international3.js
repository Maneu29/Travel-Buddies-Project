document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('You have successfully booked a Flight!');
       window.location.href = '../../flightspage/flights.html'; 
    });
  });