const titles = document.querySelectorAll(".list-tit");

titles.forEach(title => {
    title.addEventListener("click", () => {

        const content = title.nextElementSibling;

        content.classList.toggle("click");

    });
});