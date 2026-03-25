// Contact form handling
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Simple validation
    if (name && email && message) {
      // Show success message (you can integrate with actual email service here)
      alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
      contactForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Floating menu
const floatingBtn = document.getElementById("floatingBtn");
const quickMenu = document.getElementById("quickMenu");

if (floatingBtn && quickMenu) {
  floatingBtn.addEventListener("click", () => {
    quickMenu.style.display = quickMenu.style.display === "flex" ? "none" : "flex";
  });
  
  // Close quick menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!floatingBtn.contains(e.target) && !quickMenu.contains(e.target)) {
      quickMenu.style.display = "none";
    }
  });
}

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
  
  const mobileLinks = document.querySelectorAll(".mobile-nav a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      if (menuToggle) {
        menuToggle.querySelector("i").classList.add("fa-bars");
        menuToggle.querySelector("i").classList.remove("fa-times");
      }
    });
  });
}