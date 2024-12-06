const images = document.querySelectorAll('.gallery-image');

// Get the modal element
const modal = document.getElementById('zoomModal');

// Get the image inside the modal
const zoomedImage = document.getElementById('zoomedImage');

// Add click event to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    zoomedImage.src = image.src; // Set modal image source
    modal.classList.add('show'); // Add show class for zoom-in effect
    modal.style.display = 'block'; // Display modal
  });
});

// Close the modal when background is clicked
window.addEventListener('click', (e) => {
  if (e.target === modal) { // Check if background is clicked
    modal.style.display = 'none'; // Immediately hide modal
    modal.classList.remove('show'); // Remove show class
  }
});
