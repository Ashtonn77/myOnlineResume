const modal = document.getElementById("myModal");

const btns = document.querySelectorAll(".container");
const span = document.getElementsByClassName("close")[0];

const text = document.querySelector(".quote");

const quotes = [
  '"By doing what you love, you inspire & awaken the hearts of others." <br> - Satsuki Shibuya',
  '"One day you\'ll become just a memory to some people, do your best to be a good one." <br> - Unknown',
  '"Life tried to crush her, but succeeded only in creating a diamond." <br> - John Mark Green',
  '"It\'s so hard to leave until you leave, then it is the easiest goddamned thing in the world." <br> - John Green',
  '"You have to keep breaking your heart until it opens." <br> - Rumi',
  '"I\'m still learning to love the parts of myself that no one claps for." <br> - Rudy Francisco',
  '"We will never get back the life we waste trying to be normal." <br> - Atticus',
];

btns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
    text.innerHTML = quotes[Math.floor(Math.random() * 7)];
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
