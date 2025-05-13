document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-button");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "user.html"; // ✅ Redirect immediately
    });
  }

  // Password show/hide toggle
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggle-icon");

  if (toggleIcon) {
    toggleIcon.addEventListener("click", function () {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });
  }
});

  
    if (passwordInput) {
      passwordInput.addEventListener("input", function() {
        const strength = checkPasswordStrength(this.value);
        updateStrengthIndicator(strength);
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        if (!validateEmail(emailInput.value)) {
          showError("Please enter a valid email address");
          return;
        }
        
        if (passwordInput.value.length < 8) {
          showError("Password must be at least 8 characters");
          return;
        }
        
        // Show loading state
        showLoading(true);
        
        try {
          // Simulate API call (replace with actual fetch)
          await simulateLogin(emailInput.value, passwordInput.value);
          
          // On successful login (redirect would happen here)
          console.log("Login successful");
          window.location.href = "user.html"; // Change to your target page
          showError("", false); // Clear any errors
        } catch (error) {
          showError(error.message || "Login failed. Please try again.");
        } finally {
          showLoading(false);
        }
      });
    }
  
    // Helper functions
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function checkPasswordStrength(password) {
      // Simple strength check - enhance as needed
      if (password.length === 0) return 0;
      if (password.length < 6) return 1;
      if (password.length < 9) return 2;
      if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        return 4; // Strong
      }
      return 3; // Medium
    }
  
    function updateStrengthIndicator(strength) {
      const classes = ["weak", "medium", "medium", "strong"];
      const texts = ["Weak", "Medium", "Good", "Strong"];
      
      strengthBar.className = "strength-bar " + (strength > 0 ? classes[strength - 1] : "");
      strengthText.textContent = strength > 0 ? texts[strength - 1] : "";
    }
  
    function showLoading(isLoading) {
      if (isLoading) {
        buttonText.textContent = "Logging in...";
        spinner.classList.remove("hidden");
        loginButton.disabled = true;
      } else {
        buttonText.textContent = "Login";
        spinner.classList.add("hidden");
        loginButton.disabled = false;
      }
    }
  
    function showError(message, isError = true) {
      errorMessage.textContent = message;
      errorMessage.style.display = isError && message ? "flex" : "none";
    }
  
    // Simulate API call (replace with actual fetch)
   function simulateLogin(email, password) {
  const fixedEmail = "admin@example.com";
  const fixedPassword = "Admin@123";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === fixedEmail && password === fixedPassword) {
        resolve({ success: true });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000); // Optional: Simulate delay
  });
}