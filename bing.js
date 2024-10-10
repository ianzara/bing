document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('img'); // Selecting the image element
    const text = document.querySelector('.pop-text'); // Selecting the text element
  
    function toggleAnimation() {
      image.classList.toggle('show'); // Toggle class 'show' for image
      text.classList.toggle('show'); // Toggle class 'show' for text
    }
  
    // Start the animation loop, toggling every 2 seconds
    setInterval(toggleAnimation, 2000);
  });
  
  