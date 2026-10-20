document.documentElement.classList.add("js");

const elements = document.querySelectorAll(".load-hidden");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
} else {
  elements.forEach((element) => element.classList.add("is-visible"));
}
