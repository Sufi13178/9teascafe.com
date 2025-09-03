const slider = document.getElementById("slider");
const scrollAmount = 320; // adjust based on slide width + margin

function slideLeft() {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
}

function slideRight() {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
}

