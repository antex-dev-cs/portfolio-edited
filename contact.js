// Remove the old form handler since we're now using FormSubmit
// The form will work automatically with FormSubmit

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
