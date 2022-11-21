const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".card-carrossel");
const maxItems=3;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 1;
    }

    if (currentItem < 0) {
      currentItem = maxItems;
    }

         items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
