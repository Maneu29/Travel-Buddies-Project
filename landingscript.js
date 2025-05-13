// Services Section
const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

function setInitialPosition() {
    const activeIndex = [...list].findIndex(item => item.classList.contains('active'));
    if (activeIndex >= 0) {
        indicator.style.transform = `translateX(calc(70px * ${activeIndex}))`;
    }
}

setInitialPosition();

list.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        indicator.style.transform = `translateX(calc(70px * ${index}))`;
    });

    item.addEventListener('click', (e) => {
        // Prevent default behavior only for items that are not the "Hotels" link
        if (item.querySelector('.text').textContent !== "Hotels" &&
           item.querySelector('.text').textContent !== "Apartments" &&
           item.querySelector('.text').textContent !== "Activities" &&
           item.querySelector('.text').textContent !== "Flights"
          
          )
           
           
          
          {
            e.preventDefault();
        }
        list.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

const navigation = document.querySelector('.navigation');
navigation.addEventListener('mouseleave', () => {
    const activeItem = document.querySelector('.navigation .active');
    const activeIndex = [...list].indexOf(activeItem);
    if (activeIndex >= 0) {
        indicator.style.transform = `translateX(calc(70px * ${activeIndex}))`;
    }
});


function glowTarget(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const services = document.querySelector('.services');
    const servicesSection = document.getElementById('services');
    
    // Scroll to section
    servicesSection.scrollIntoView({ behavior: 'smooth' });

    // Add glow class
    services.classList.add('glow');

    // Remove it after animation
    setTimeout(() => {
        services.classList.remove('glow');
    }, 1000);
}
  // Top Destination Section

  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');

  next.addEventListener('click', function () {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
  });

  prev.addEventListener('click', function () {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
  });

// Share Experience
 function shareExperience() {
    const textarea = document.getElementById("experience");
    const text = textarea.value.trim();
    if (text === "") return;

    const popup = document.getElementById("popup");
    popup.style.display = "block";

    textarea.value = ""; // Clear textarea after sharing

    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }


 window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const targetId = params.get("scrollTo");

    if (targetId) {
      const section = document.getElementById(targetId);
      const container = document.getElementById("contentContainer");

      if (section && container) {
        container.scrollTo({
          top: section.offsetTop,
          behavior: "smooth"
        });
      }
    }
  });

  // Autoscroll 

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
