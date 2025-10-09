const boxes = document.querySelectorAll(".scroll-in");

const callback = (entries) => {
  entries.forEach(entry => {
    const target = entry.target;
    if (entry.isIntersecting) {
        target.classList.add("displayed");
    } else {
        target.classList.remove("displayed");
    }
  });
};

const io = new IntersectionObserver(callback, { threshold: 1,});

boxes.forEach(box => io.observe(box));