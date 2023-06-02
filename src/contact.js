function contact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const h1 = document.createElement("h1");
    h1.innerHTML = "Contact Us";

    const nav = document.createElement("nav");
    nav.classList.add("contactInfo");

    const facebook = document.createElement("a");
    facebook.textContent= "Facebook ";
    facebook.href = "https://www.facebook.com/safin.20050601";

    const discord = document.createElement("a");
    discord.textContent= "Discord ";
    discord.href = "https://discordid.netlify.app/?id=785765895569801246";
    
    const github = document.createElement("a");
    github.textContent= "Github ";
    github.href = "https://github.com/Safin01";
    
    const instagram = document.createElement("a");
    instagram.textContent= "Instagram ";
    instagram.href = "https://www.instagram.com/safin_s01/";
    
    const linkedin = document.createElement("a");
    linkedin.textContent= "Linkedin ";
    linkedin.href = "https://www.linkedin.com/in/safin-sarker-861212210/";

    nav.appendChild(h1);
    nav.appendChild(facebook);
    nav.appendChild(discord);
    nav.appendChild(linkedin);
    nav.appendChild(instagram);
    nav.appendChild(github);

    contact.appendChild(nav);

    return contact;
}

export default contact;