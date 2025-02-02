function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show selected section
  document.getElementById(sectionId).classList.add("active");
}

// Add typing animation on load
window.onload = function () {
  document.querySelector(".typing").style.animation =
    "typing 2s steps(20), blink-caret 0.75s step-end infinite";
};