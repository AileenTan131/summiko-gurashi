function scrollDown(params) {
  alert("Proceed down the page 👇");
}
function Oops(params) {
  alert(
    "Oops! Page still under construction... Please come back another day 🙇‍♀️"
  );
}
function updateHeading(newHeading) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = newHeading;
}
function askDetails(params) {
  let name = prompt("What is your name?");
  prompt("Kindly leave behind your email address. Thank you!");
  updateHeading(`🍀 Hi ${name}, we will be keeping in touch soon! 🍀`);
}

let homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", scrollDown);
let cafeButton = document.querySelector(".cafe-button");
cafeButton.addEventListener("click", scrollDown);
let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", Oops);
let merchandiseButton = document.querySelector(".merchandise-button");
merchandiseButton.addEventListener("click", Oops);
let contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", askDetails);

`💖 ${name}, we will be keeping in touch soon!`;
