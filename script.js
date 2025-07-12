// Show a welcome message in the browser console
console.log("🎉 Welcome to WebSpark Landing Page!");

// Optional: Add button animation on click
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', function () {
  ctaBtn.textContent = "Loading...";
  setTimeout(() => {
    ctaBtn.textContent = "Explore Now";
    alert("Thanks for clicking! More features coming soon 😊");
  }, 1000);
});
