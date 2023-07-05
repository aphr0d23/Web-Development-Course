// fungsi toggle adalah membalikan keadaan, dari tidak ada menjadi ada dan sebaliknya

// this part make your menu slide from right to left
// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

// jika kita klik selain menu hamburger maka menu akan menghilang
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
