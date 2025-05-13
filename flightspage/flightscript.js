// Future JS logic can go here
console.log("Travel Buddies site loaded.");


function showAirline(airlineId) {
    const sections = document.querySelectorAll('.airline-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(airlineId).style.display = 'block';
  }

//   drop menu

document.addEventListener('DOMContentLoaded', () => {
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  const cabinSelect = document.getElementById('cabin');
  const budgetSelect = document.getElementById('budget');
  const allCards = document.querySelectorAll('.flight-card');

  function getBudgetRange(value) {
    switch(value) {
      case 'low': return [0, 5000];
      case 'medium': return [5000, 10000];
      case 'high': return [10000, Infinity];
      default: return [0, Infinity];
    }
  }

  function filterFlights() {
    const fromVal = fromSelect.value;
    const toVal = toSelect.value;
    const cabinVal = cabinSelect.value;
    const budgetVal = budgetSelect.value;
    const [minPrice, maxPrice] = getBudgetRange(budgetVal);

    allCards.forEach(card => {
      const from = card.dataset.from;
      const to = card.dataset.to;
      const cabin = card.dataset.cabin;
      const price = parseInt(card.dataset.price);

      const matchesFrom = !fromVal || from === fromVal;
      const matchesTo = !toVal || to === toVal;
      const matchesCabin = !cabinVal || cabin === cabinVal;
      const matchesBudget = !budgetVal || (price >= minPrice && price <= maxPrice);

      if (matchesFrom && matchesTo && matchesCabin && matchesBudget) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  fromSelect.addEventListener('change', filterFlights);
  toSelect.addEventListener('change', filterFlights);
  cabinSelect.addEventListener('change', filterFlights);
  budgetSelect.addEventListener('change', filterFlights);
});

// Contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address that includes '@'.");
      document.getElementById("email").style.border = "2px solid red";
      return;
    }
  alert(`Thank you for reaching out, ${name}!`);
    form.reset();
    
    // Optional: Reset border if email is valid
    document.getElementById("email").style.border = "";

    
  });
});