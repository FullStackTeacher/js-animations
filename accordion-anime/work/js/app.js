const titles = document.querySelectorAll(".list-tit");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    
    if (content.style.height && content.style.height !== "0px") {
      content.style.height = "0";
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});