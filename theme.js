const theme = document.querySelector("#theme");
const html = document.querySelector("html");
const body = document.querySelector("body");

if(!html.classList.contains("dark")) {
    html.classList.add("dark");
    body.classList.add("dark");
}

theme.addEventListener("click", function () {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        body.classList.remove("dark");
    } else {
        html.classList.add("dark");
        body.classList.add("dark");
    }
});