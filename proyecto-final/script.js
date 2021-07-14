let sobreMi = document.querySelector("#sobreMi");

let scrolling = document.querySelector("#selection1");

sobreMi.addEventListener("click", navegando, false);

function navegando(e) {
    scrolling.scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });
}

let contacto = document.querySelector("#contacto");
let scrolling2 = document.querySelector("#selection2");

contacto.addEventListener("click", navegando2, false)

function navegando2(e) {
    scrolling2.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
    })
}
function abreteSesamo1() {
    window.open("https://www.google.com/maps/place/Concepci%C3%B3n+del+Uruguay,+Entre+R%C3%ADos/@-32.4737636,-58.2700328,14z/data=!4m2!3m1!1s0x95afdb005dbc939d:0x3c8a23c6cb1334b2")
}
function abreteSesamo2() {
    window.open("https://mail.google.com/mail/u/0/#inbox")
}
function abreteSesamo3() {
    window.open("https://www.linkedin.com/in/pilar-ansa-722753216/")
}
function abreteSesamo4() {
    window.open("https://github.com/Piliansa");
}









// let sobreMi = document.querySelector("#sobreMi");
// let contacto = document.querySelector("#contacto");

// sobreMi.addEventListener("click", seccion1, false);
// contacto.addEventListener("click", seccion2, false);

// function seccion1(e) {
//     selection1.scrollIntoView({ behavior: "smooth" });
// }
// function seccion2(e) {
//     selection1.scrollIntoView({ behavior: "smooth"});
// }







// const links = document.querySelectorAll(".scroll-to");
// links.forEach((item)=>{
//     item.addEventListener("click", ()=>{
//         const el = document.getElementById(item.getAttribute("data-link"));
//         el.scrollIntoView({behavior:"smooth", block:"end"})
//     })
// })
// console.log(el);