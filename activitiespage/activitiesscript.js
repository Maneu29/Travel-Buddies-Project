// Enhanced dropdown interactions
const filterGroups = document.querySelectorAll('.filter-group');

filterGroups.forEach(group => {
    const select = group.querySelector('select');
    const label = group.querySelector('label');
    
    // Add focus/blur effects
    select.addEventListener('focus', function() {
        group.style.transform = 'translateY(-3px)';
        label.style.color = '#ffffff';
        label.style.fontWeight = 'bold';
    });
    
    select.addEventListener('blur', function() {
        group.style.transform = 'translateY(0)';
        label.style.color = 'white';
        label.style.fontWeight = 'normal';
    });
    
    // Add change animation
    select.addEventListener('change', function() {
        if (this.value) {
            group.style.animation = 'none';
            void group.offsetWidth; // Trigger reflow
            group.style.animation = 'pulse 0.5s ease';
            
            // Briefly highlight the changed filter
            label.style.color = '#ffffff';
            setTimeout(() => {
                if (document.activeElement !== select) {
                    label.style.color = 'white';
                }
            }, 1000);
        }
    });
});

// Add keyboard navigation to dropdowns
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        const focusedSelect = document.querySelector('select:focus');
        if (focusedSelect) {
            focusedSelect.parentElement.style.transform = 'scale(1.02)';
            focusedSelect.parentElement.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.3)';
        }
    }
});

// autoscroll

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when scrolled down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// dropdown menu

document.addEventListener('DOMContentLoaded', function () {
    const hotels = [
        {
            name: "Camping",
            location: "zabales",
            budget: "low",
            image: "https://campsites.ph/uploads/images/campsite-87-mapanuepe-lake-a71f2f9c061208a3b3e938e4936f61cd.jpg",
            description: "Escape the city and enjoy a peaceful camping experience by the serene Mapanuepe Lake in Zambales.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities1/bookingpage_activities1.html"
        },
        {
            name: "Snorkeling",
            location: "australia",
            budget: "high",
            image: "https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/FVOKZJCBJD64HJO6ARQ3UO6UIQ.jpg",
            description: "Discover vibrant marine life and crystal-clear waters as you snorkel through Australia's breathtaking coral reefs.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities2/bookingpage_activities2.html"
        },
        {
            name: "Skydiving",
            location: "new zealand",
            budget: "high",
            image: "https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-6910619/img-1713642025-5804-1245155-tbd-asset__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
            description: "Experience an adrenaline rush like no other as you skydive over the scenic landscapes of New Zealand.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities3/bookingpage_activities3.html"
        },
        {
            name: "Island Hopping",
            location: "philippines",
            budget: "medium",
            image: "https://info.myboracayguide.com/wp-content/uploads/2023/12/jpg.jpeg",
            description: "Explore the pristine islands of the Philippines with an unforgettable island-hopping adventure.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities4/bookingpage_activities4.html"
        },
        {
            name: "Ziplining",
            location: "costa rica",
            budget: "medium",
            image: "https://www.travelexcellence.com/wp-content/uploads/2020/09/cr-canopytour.jpg",
            description: "Soar above the lush Costa Rican rainforest on a thrilling zipline adventure you’ll never forget.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities5/bookingpage_activities5.html"
        },
        {
            name: "Surfing",
            location: "philippines",
            budget: "medium",
            image: "https://generalluna.gov.ph/wp-content/uploads/2022/10/cloud-9-surfing-siargao-island.jpg",
            description: "Ride the iconic waves of Siargao’s Cloud 9, one of the world’s best surfing destinations.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities6/bookingpage_activities6.html"
        },
        {
            name: "Hiking",
            location: "united kingdom",
            budget: "medium",
            image: "https://cdn2.veltra.com/ptr/20191118031430_295952610_13423_0.jpg?imwidth=550&impolicy=custom",
            description: "Trek through breathtaking trails and rolling hills across the scenic countryside of the United Kingdom.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities7/bookingpage_activities7.html"
        },
        {
            name: "Skiing",
            location: "france",
            budget: "high",
            image: "https://www.planetware.com/wpimages/2018/11/france-ski-resorts-meribel-skier-on-mountain-top.jpg",
            description: "Hit the slopes in the French Alps and enjoy a luxurious skiing experience in Meribel.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities8/bookingpage_activities8.html"
        },
        {
            name: "ATV Riding",
            location: "philippines",
            budget: "medium",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6d/3a/01/2018-mayon-lava-taril.jpg?w=1200&h=-1&s=1",
            description: "Take an ATV ride along lava trails at the base of Mount Mayon for an epic off-road adventure.",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_activities9/bookingpage_activities9.html"
        }
    ];

    const hotelsGrid = document.querySelector('.hotels-grid');
    const locationSelect = document.getElementById('location');
    const budgetSelect = document.getElementById('budget');

    // Function to display hotels
    function displayHotels(filteredHotels) {
        hotelsGrid.innerHTML = ''; // Clear current cards
        if (filteredHotels.length === 0) {
            hotelsGrid.innerHTML = '<p style="color: white;">No matching activities found.</p>';
            return;
        }
        filteredHotels.forEach(hotel => {
            const card = document.createElement('div');
            card.className = 'hotel-card';
            card.innerHTML = `
                <div class="hotel-image" style="background-image: url('${hotel.image}')"></div>
                <div class="hotel-info">
                    <h3>${hotel.name}</h3>
                    <p>${hotel.description}</p>
                    <p><strong>Location:</strong> ${hotel.location}</p>
                     <a href="${hotel.link || '#'}" class="book-btn">${hotel.buttonText || 'Book Now'}</a>
                </div>
            `;
            hotelsGrid.appendChild(card);
        });
    }

    // Initial display
    displayHotels(hotels);

    // Filtering function
    function filterHotels() {
        const selectedLocation = locationSelect.value.toLowerCase();
        const selectedBudget = budgetSelect.value;

        const filtered = hotels.filter(hotel => {
            const locationMatch = !selectedLocation || hotel.location.includes(selectedLocation);
            const budgetMatch = !selectedBudget || hotel.budget === selectedBudget;
            return locationMatch && budgetMatch;
        });

        displayHotels(filtered);
    }

    // Event listeners
    locationSelect.addEventListener('change', filterHotels);
    budgetSelect.addEventListener('change', filterHotels);
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