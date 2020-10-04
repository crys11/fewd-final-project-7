console.log("JS Loaded!");

const name = "Marc";

console.log(name);

const hiddenMenu = document.getElementById("blank");
hiddenMenu.addEventListener("mouseover", showMenu);

function showMenu() {
  document.getElementById("nav-container-area").classList.add("show");
}

const shownMenu = document.getElementById("nav-container-area");
shownMenu.addEventListener("mouseleave", hideMenu);
// console.log("leave")

function hideMenu() {
  document.getElementById("nav-container-area").classList.remove("show");
}

const cont = document.getElementById("grid");

// const body = document.getElementsByTagName("body");

let w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
// console.log(w);

let h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
// console.log(h);

// function bodySize() {
//   return w;
// }

for (let i = 0; i < h; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "square");
  div.setAttribute("id", "div" + i);
  div.style.opacity = "0";
  // div.style.zIndex = "10";
  div.addEventListener("mouseover", showSquare);
  function showSquare() {
    div.style.opacity = "1";
  }
  // console.log("clicked");
  // console.log(div);
  cont.appendChild(div);
}

// const goBack = (document.getElementById("go-back");
// goBack.appendChild(footer);
