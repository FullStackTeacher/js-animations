const boxes = document.querySelectorAll(".scroll-in");

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("displayed");
        } else {
            entry.target.classList.remove("displayed");
        }

    });
}, {
    threshold: 1
});

boxes.forEach(box => io.observe(box));