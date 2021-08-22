const selected = document.querySelector(".selected");
const optionsContent = document.querySelector(".optionsContent");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContent.classList.toggle("active");
})

optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContent.classList.remove("active");
    });
});