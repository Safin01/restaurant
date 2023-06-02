import "./style.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import navbar from "./navbar";

const body = document.querySelector("body");
body.style.margin = "0";

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";

container.appendChild(navbar());
container.appendChild(home());
body.appendChild(container);

const homeSection = document.querySelector("#navLiHome");
const menuSection = document.querySelector("#navLiMenu");
const contactSection = document.querySelector("#navLiContact");

homeSection.addEventListener("click",() =>{
    const h = document.getElementsByClassName("home");
    const m = document.getElementsByClassName("menu");
    const c = document.getElementsByClassName("contact");

    if(h.length === 0){
        if(m.length > 0){
            const m1 = document.querySelector(".menu");
            m1.remove();
        }else if(c.length > 0){
            const c1 = document.querySelector(".contact");
            c1.remove();
        }
        // const h1 = document.querySelector(".home");
        container.appendChild(home());
    }
});

menuSection.addEventListener("click",() =>{
    const h = document.getElementsByClassName("home");
    const m = document.getElementsByClassName("menu");
    const c = document.getElementsByClassName("contact");
    if(m.length === 0){
        if(h.length > 0){
            const h1 = document.querySelector(".home");
            h1.remove();
        }else if(c.length > 0){
            const c1 = document.querySelector(".contact");
            c1.remove();
        }
        // const m1 = document.querySelector(".menu");
        container.appendChild(menu());
    }
});

contactSection.addEventListener("click",() =>{
    const h = document.getElementsByClassName("home");
    const m = document.getElementsByClassName("menu");
    const c = document.getElementsByClassName("contact");
    if(c.length === 0){
        if(h.length > 0){
            const h1 = document.querySelector(".home");
            h1.remove();
        }else if(m.length > 0){
            const m1 = document.querySelector(".menu");
            m1.remove();
        }
        // const c1 = document.querySelector(".contact");
        container.appendChild(contact());
    }
});
