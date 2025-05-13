document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('You have successfully booked an Apartment accommodation!');
       window.location.href = '../../apartmentpage/apartments.html'; 
    });
  });