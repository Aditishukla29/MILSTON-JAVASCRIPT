// Get the progress bar element
const progressBar = document.getElementById('progress-bar');

// Add an event listener to the window object to listen for the scroll event
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Update the progress bar to match the scroll percentage
  progressBar.style.width = scrollPercent + '%';
});
 