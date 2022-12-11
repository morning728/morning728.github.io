var header = document.getElementById("header");
window.addEventListener("scroll", (e) => {
    header.classList.remove("activatedH");
})

function removeAct(){
    document.getElementById('header').classList.add('activatedH');
}