document.addEventListener('DOMContentLoaded', function() {
    // Hotel data
    const hotels = [
        {
            name: "Ayala Land Premier",
            location: "philippines",
            budget: "medium",
            description: "Azuela Cove, J.P. Laurel Avenue Corner R. Castillo ST, KM 7, Lanang, Brgy. Vicente Hizon, Davao City, Philippines",
            image: "https://lh6.googleusercontent.com/proxy/eqnwdi6gfLMFphsAYYLXanwsZvGCPqOLicJwOFPm6XGP4y6jiGPiS7Z3MILoZaYGhhTreY-1X1zicwJRIIqmKgQOL0SPlVLqoMv10nLD_ayvR2Lgujl9CGR4WN7M775Tny_CSJCEVMctFsW2p5psQpKF0qYY",
            buttonText: "BOOK NOW",
            link: "../booking/bookingpage_apartment1/bookingpage_apartment1.html"
        },
        {
            name: "The Ventura",
            budget: "high",
            location: "united states of america",
            description: "240 E 86th St New York, NY 10028, USA",
            image: "https://g5-assets-cld-res.cloudinary.com/image/upload/x_327,y_0,h_1208,w_1209,c_crop/q_auto,f_auto,c_fill,g_center,h_600,w_600/v1715374770/g5/g5-c-5m1162j5c-rose-associates/g5-cl-1ln7ydmueh-rose-associates-new-york-ny/uploads/PHD_Living_Dining_eel6tj.jpg",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment2/bookingpage_apartment2.html"
        },
        {
            name: "Prime Avant",
            location: "philippines",
            budget: "low",
            description: "26th Street corner 3rd Avenue, Crescent Park West, Bonifacio Global City, Taguig, Manila",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/610911045.jpg?k=46daa15f5df96ce054cf05316c3365e06bf1f8d8213d586f0fd865719f370e08&o=&hp=1",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment3/bookingpage_apartment3.html"
        },
        {
            name: "Mila",
            location: "united states of america",
            budget: "high",
            description: "201 N Garland Ct, Chicago, IL 60601, USA",
            image: "https://images1.apartments.com/i2/YfgNTjK0tgJ39vOUq5CinAG7FEPShkFMuCUUw8CAuUM/117/mila-chicago-il-primary-photo.jpg",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment4/bookingpage_apartment4.html"
        },
        {
            name: "Hmlet Yoyoga Uehara",
            location: "japan",
            budget: "medium",
            description: "3-1-16 Uehara, Shibuya-ku, Tokyo, Japan",
            image: "https://cdn.shortpixel.ai/client/to_webp,w_1500,q_lossless,ret_wait/https://s3.ap-northeast-1.amazonaws.com/ehousing-dev/properties/cAAVGmDncb-1724394431150.jpg",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment5/bookingpage_apartment5.html"
        },
        {
            name: "Ream YoHo",
            location: "cambodia",
            budget: "low",
            description: "Yoho Resort Rd, Sihanoukville, Sihanoukville, Cambodia",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/520416654.jpg?k=679dc6a8b2dafbfcf4b9b33ffd2ea31d33f92844623042c327a783c788c3270d&o=&hp=1",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment6/bookingpage_apartment6.html"
        },
        {
            name: "Blueground",
            location: "united kingdom",
            budget: "high",
            description: "Holland Park, Elsham Road, London, UK",
            image: "https://photos2.theblueground.com/736/social/LON.jpg",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment7/bookingpage_apartment7.html"
        },
        {
            name: "The Port Douglas",
            location: "australia",
            budget: "medium",
            description: "9 Cowrie St, 4877 Port Douglas, Australia",
            image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/641634319.jpg?k=31db56ca2f2fa0a20d59498c1e8581b4cf9787392af754302e73f54a74e4c4b4&o=",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment8/bookingpage_apartment8.html"
        },
        {
            name: "The Center",
            location: "singapore",
            budget: "low",
            description: "150 South Bridge Road 15-02 Fook Hai Building,  Singapore",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-21854687/original/d6ec62b7-b537-4a4d-b112-7ea79dfe097a.jpeg",
            buttonText: "BOOK NOW",
            link: "../../booking/bookingpage_apartment9/bookingpage_apartment9.html"
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


    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, phone, message });
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Filter functionality
    const locationFilter = document.getElementById('location');
    const budgetFilter = document.getElementById('budget');
    
    function filterHotels() {
        const locationValue = locationFilter.value;
        const budgetValue = budgetFilter.value;
        
        // In a real app, you would filter the hotels array based on these values
        // For now, we'll just log the filter values
        console.log('Filters:', { location: locationValue, budget: budgetValue });
    }
    
    locationFilter.addEventListener('change', filterHotels);
    budgetFilter.addEventListener('change', filterHotels);


// Add this to your existing script.js

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

// autoscoll

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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

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
    document.getElementById("email").style.border = "";
  });
});
