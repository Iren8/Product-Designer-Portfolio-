const overlay = document.querySelector(".page-transition");

/* PAGE TRANSITION */
document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", (e) => {

    const url = link.getAttribute("href");
    if (!url || url.startsWith("#")) return;

    e.preventDefault();

    overlay.style.transform = "scaleY(1)";

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  });
});

window.addEventListener("pageshow", () => {
  overlay.style.transform = "scaleY(0)";
});

/* REVEAL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

/* PARALLAX */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(el => {
    el.style.transform = `translateY(${window.scrollY * 0.06}px)`;
  });
});

/* PROGRESS */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  document.querySelector(".scroll-progress").style.width = progress + "%";
});
