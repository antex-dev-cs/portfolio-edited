// Certificate toggle
const viewCertBtn = document.getElementById("viewCertBtn");
const certificates = document.getElementById("certificates");

if (viewCertBtn && certificates) {
  viewCertBtn.addEventListener("click", () => {
    certificates.classList.toggle("hidden");
    if (!certificates.classList.contains("hidden")) {
      certificates.scrollIntoView({ behavior: "smooth", block: "start" });
      viewCertBtn.innerHTML = '<i class="fas fa-times"></i> Hide Certificates';
    } else {
      viewCertBtn.innerHTML = '<i class="fas fa-certificate"></i> View Certificates';
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

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 150;
  
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

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
      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });
}