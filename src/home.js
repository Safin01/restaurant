import "./style.css";
function home(){
    const home = document.createElement("div");
    home.classList.add("home");

    const Intro = document.createElement("div");
    const introDescription = document.createElement("div");
    introDescription.innerHTML = "Welcome to Safin's Restaurant, a renowned and elegant dining establishment in Cumilla, Bangladsh. Our restaurant is celebrated for its delectable cuisine, impeccable service, and inviting ambiance. From the moment you step through our doors, our attentive staff will ensure you have an extraordinary dining experience. Our menu features a diverse selection of delicious dishes, expertly crafted by our talented chefs. Whether you prefer classic favorites or innovative creations, our culinary offerings will tantalize your taste buds. Pair your meal with a selection from our thoughtfully curated wine list, and allow us to create unforgettable memories for your special occasions or private events. Safin's Restaurant is the epitome of refined elegance and culinary excellence. Join us and embark on a culinary journey that will leave a lasting impression.";
    introDescription.id = "introDescription";
    Intro.appendChild(introDescription);
    Intro.classList.add("intro");
    home.appendChild(Intro);

    return home;
}

export default home;