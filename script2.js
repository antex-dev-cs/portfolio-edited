// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth scroll to projects
function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Typing effect
const roles = [
  "Web Developer 💻",
  "Network Engineer 🌐",
  "Tech Enthusiast 🚀",
  "Problem Solver 🧠",
  "Video Editor ✂️"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingText = document.getElementById("typing-text");

function typeEffect() {
  if (!typingText) return;
  
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }
  
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

// Start typing effect
if (typingText) {
  setTimeout(typeEffect, 500);
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-times");
  });
}

// Close mobile menu when clicking a link
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