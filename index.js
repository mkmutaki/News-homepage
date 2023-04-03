const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const closed = document.getElementById("closed");

burger.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

closed.addEventListener("click", function () {
  menu.classList.add("hidden");
});

// close.addEventListener("click", function () {
//   if (menu.classList.contains("hidden")) {
//     menu.classList.add("hidden");
//   } else {
//     menu.classList.remove("hidden");
//   }
// });
