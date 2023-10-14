// Array of image sources
let images = ['angry-stickman.png', 'stickman-with-todo-list.png', 'stick-man-painting-on-canvas.png', 'stick-man-reading-newspaper.png', 'happy-stick-figure.png'];
// Current image index
let currentIndex = 0;
// Get elements
let slides = document.querySelectorAll('.slide');
// Show first slide by default
slides[currentIndex].classList.add('active');
// Change slide every 5 seconds
setInterval(() => {
  // Remove active class from current slide
  slides[currentIndex].classList.remove('active');
  // Increment index
  currentIndex++;
  // Reset to 0 if reached end
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  // Add active class to next slide
  slides[currentIndex].classList.add('active');
}, 5000);
