// Select elements
const openPopup = document.getElementById("open-popup");
const closePopup = document.getElementById("close-popup");
const popup = document.getElementById("popup");

// Open the popup when Button A is clicked
openPopup.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Close the popup when the X button is clicked
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});
