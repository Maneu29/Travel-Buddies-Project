document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('You have successfully booked an Hotel accommodation!');
      window.location.href = '../../hotelpage/hotels.html'; 
    });
  });