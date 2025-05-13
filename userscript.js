const editBtn = document.getElementById('edit-btn');
const modal = document.getElementById('edit-modal');
const closeBtn = document.querySelector('.close-btn');
const usernameDisplay = document.querySelector('.username');
const usernameInput = document.getElementById('username-input');
const profilePic = document.querySelector('.profile-pic');
const profilePicInput = document.getElementById('profile-pic-input');

editBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Update username
  usernameDisplay.textContent = usernameInput.value;

  // Update profile picture if selected
  const file = profilePicInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePic.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  modal.style.display = 'none';
});


// Logout 
document.getElementById('logout-link').addEventListener('click', function(e) {
  e.preventDefault(); // prevent default navigation
  const confirmLogout = confirm('Are you sure you want to logout?');
  if (confirmLogout) {
    window.location.href = 'landingpage.html';
  }
});

// Dashboard

   const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });

    // Handle cancel button logic
    document.querySelectorAll('.cancel-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const type = card.querySelector('.card-header')?.textContent || "Item";

        if (e.target.textContent === "Cancel") {
          const confirmCancel = confirm(`Are you sure you want to cancel this ${type}?`);
          if (confirmCancel) {
            // Move card to canceled section
            document.getElementById('canceled').appendChild(card);
            e.target.textContent = "Cancelled";
            e.target.disabled = true;

            // Switch to the canceled tab automatically
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            document.querySelector('[data-tab="canceled"]').classList.add('active');
            document.getElementById('canceled').classList.add('active');
          }
        }
      });
    });

// Calendar
const monthYear = document.getElementById("monthYear");
    const calendarDays = document.getElementById("calendarDays");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let currentDate = new Date();
    let startDate = null;
    let endDate = null;

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDay = firstDay.getDay();
      const daysInMonth = lastDay.getDate();

      monthYear.textContent = `${firstDay.toLocaleString("default", { month: "long" })} ${year}`;
      calendarDays.innerHTML = "";

     

      for (let i = 0; i < startDay; i++) {
        const empty = document.createElement("div");
        calendarDays.appendChild(empty);
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;

        const thisDate = new Date(year, month, i);
        if (startDate && endDate && thisDate >= startDate && thisDate <= endDate) {
          day.classList.add("selected");
        }

        day.addEventListener("click", () => {
          const clickedDate = new Date(year, month, i);

          if (!startDate || (startDate && endDate)) {
            startDate = clickedDate;
            endDate = null;
          } else if (clickedDate >= startDate) {
            endDate = clickedDate;
          } else {
            startDate = clickedDate;
            endDate = null;
          }

          renderCalendar(currentDate);
          updateSelectedRangeDisplay();
        });

        calendarDays.appendChild(day);
      }
    }

    function updateSelectedRangeDisplay() {
      const display = document.getElementById("selectedRange");
      if (startDate && endDate) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        display.textContent = `Trip: ${startDate.toLocaleDateString(undefined, options)} – ${endDate.toLocaleDateString(undefined, options)}`;
      } else if (startDate) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        display.textContent = `Start Date: ${startDate.toLocaleDateString(undefined, options)}`;
      } else {
        display.textContent = '';
      }
    }

    prev.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });

    next.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });

    renderCalendar(currentDate);

    
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
