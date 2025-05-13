document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('You have successfully booked an Activity!');
      window.location.href = '../../activitiespage/activities.html'; 
    });
  });