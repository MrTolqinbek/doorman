let y = 0;
const div = document.querySelector(".roe");
function check() {
  div.offsetTop < window.pageYOffset + div.getBoundingClientRect().height
    ? document.querySelectorAll(".roe>div p").forEach((e) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count > +e.dataset.count) {
            clearInterval(interval);
            window.removeEventListener('scroll',check)
          } else {
            e.innerHTML = Math.ceil(count);
            count += e.dataset.count / 10;
          }
        }, 100);
      })
    : "";
}
window.addEventListener("scroll", check);
