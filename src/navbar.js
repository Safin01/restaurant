import "./style.css";
function navbar(){
    const navbar = document.createElement("div");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerHTML = "Home";
    li2.innerHTML = "Menu";
    li3.innerHTML = "Contact";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    navbar.appendChild(ul);
    navbar.classList.add("navbar");
    ul.id = "navUl";
    li1.id = "navLiHome";
    li2.id = "navLiMenu";
    li3.id = "navLiContact";
    li1.classList.add("navLi")
    li2.classList.add("navLi")
    li3.classList.add("navLi")

    return navbar;
}

export default navbar;