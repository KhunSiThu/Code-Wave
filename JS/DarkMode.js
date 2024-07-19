const body = document.getElementsByTagName("body")[0];
const cirle = document.querySelector(".circle");

document.querySelector(".mode-btn").addEventListener("click", () => {
    if(cirle.classList.contains("circle-move"))
    {
        cirle.classList.remove("circle-move");
        body.classList.remove("dark");
    } else {
        cirle.classList.add("circle-move");
        body.classList.add("dark");
    }
})