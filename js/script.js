// =========================================================
// Vyshnavi Ramisetty - ApexPlanet Task 1 Portfolio
// JavaScript: DOM, events, theme, mobile menu, validation
// =========================================================

const body = document.body;
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const backTop = document.getElementById("backTop");
const scrollProgress = document.getElementById("scrollProgress");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// ---------- Mobile navigation ----------
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// ---------- Theme toggle ----------
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀" : "☾";
});

// ---------- Scroll progress + back-to-top ----------
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;
  backTop.classList.toggle("show", scrollTop > 500);

  updateActiveNav();
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Active navigation ----------
const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-link")];

function updateActiveNav() {
  const current = sections.reduce((active, section) => {
    const sectionTop = section.offsetTop - 140;
    return window.scrollY >= sectionTop ? section.id : active;
  }, "home");

  navItems.forEach((item) => {
    item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
  });
}

// ---------- Reveal-on-scroll ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// ---------- Form validation ----------
function setError(id, message) {
  document.getElementById(`${id}Error`).textContent = message;
}

function clearErrors() {
  ["name", "email", "subject", "message"].forEach((id) => setError(id, ""));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();
  formStatus.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  if (name.length < 2) {
    setError("name", "Please enter your name.");
    valid = false;
  }

  if (!isValidEmail(email)) {
    setError("email", "Enter a valid email address.");
    valid = false;
  }

  if (subject.length < 3) {
    setError("subject", "Please enter a subject.");
    valid = false;
  }

  if (message.length < 10) {
    setError("message", "Message should contain at least 10 characters.");
    valid = false;
  }

  if (!valid) {
    formStatus.textContent = "Please fix the highlighted fields.";
    formStatus.style.color = "#e03131";
    return;
  }

  // This Task 1 portfolio has no backend.
  // The validation demonstrates JavaScript form handling.
  formStatus.textContent = "Form validated successfully! Connect this form to a backend/email service when needed.";
  formStatus.style.color = "#12b886";
  contactForm.reset();
});

// ---------- Dynamic year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// Initial state
updateActiveNav();
// ApexPlanet Task 1 milestone 7
