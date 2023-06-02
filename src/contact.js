import "./style.css";

function contact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const nav = document.createElement("nav");
    nav.classList.add("contactInfo");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Contact Us";
    nav.appendChild(h1);

    const facebook = document.createElement("a");
    facebook.href = "https://www.facebook.com/safin.20050601";
    facebook.textContent = "Facebook";

    const discord = document.createElement("a");
    discord.href = "https://discordid.netlify.app/?id=785765895569801246";
    discord.textContent = "Discord";

    const github = document.createElement("a");
    github.href = "https://github.com/Safin01";
    github.textContent = "Github";

    const instagram = document.createElement("a");
    instagram.href = "https://www.instagram.com/safin_s01/";
    instagram.textContent = "Instagram";

    const linkedin = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/in/safin-sarker-861212210/";
    linkedin.textContent = "Linkedin";

    const twitter = document.createElement("a");
    twitter.href = "https://twitter.com/__Safin";
    twitter.textContent = "Twitter";
    
    nav.appendChild(facebook);
    nav.appendChild(discord);
    nav.appendChild(github);
    nav.appendChild(instagram);
    nav.appendChild(twitter);

    contact.appendChild(nav);
    
    return contact;
}

export default contact;