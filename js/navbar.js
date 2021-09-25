const nav = document.querySelector(".header-links");
const navbtn = document.querySelector(".navbutton");
navbtn.addEventListener("click", () => {
  navbtn.classList.toggle("active");
  nav.classList.toggle("notactive");
});
document.querySelector(".topto").addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
function calling(e) {
  document.querySelector(".fixedcall").style.display = "flex";
}
document.querySelector(".fixedcall i").addEventListener("click", () => {
  document.querySelector(".fixedcall").style.display = "none";
});
document.querySelectorAll(".btntel").forEach((e) => {
  e.addEventListener("click", calling);
});
document.querySelector(".cli").addEventListener("click", calling);
