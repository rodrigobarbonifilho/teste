const btn = document.querySelector(".mostra-lista-links-botao");
const nav = document.querySelector("nav");
let isVisible = btn.classList[1] === "visible" ? true : false

btn.addEventListener("click", () => {
    nav.classList.toggle("visible", !isVisible)
    btn.classList.toggle("active", !isVisible)
    isVisible = !isVisible
})
