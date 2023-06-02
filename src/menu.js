import "./style.css";

function menu(){
    const menu = document.createElement("div");
    menu.classList.add("menu")
    // menu.style.backgroundImage = "url(../src/assets/menuBackground.jpg)";

    const pizza = document.createElement("div");
    pizza.classList.add("food");
    const pizzaPhoto = document.createElement("div");
    const pizzaImg = document.createElement("img");
    pizzaImg.src = "./src/assets/pizza.jpg";
    pizzaPhoto.appendChild(pizzaImg);
    const pizzaDes = document.createElement("div");
    pizzaDes.innerHTML = " Indulge in the irresistible allure of our delicious pizza at Safin's Restaurant. Each bite is a perfect harmony of flavors, featuring a thin, crispy crust generously topped with the finest ingredients. From the savory richness of melted cheese to the vibrant bursts of flavor from our carefully selected toppings, our pizza is a culinary masterpiece that will leave you craving for more. Savor the perfection of every slice as you embark on a journey of taste and satisfaction.";
    pizzaImg.classList.add("foodPhoto");
    pizzaDes.classList.add("foodDescription");
    pizza.appendChild(pizzaImg);
    pizza.appendChild(pizzaDes);
    
    const pastry = document.createElement("div");
    pastry.classList.add("food");
    const pastryPhoto = document.createElement("div");
    const pastryImg = document.createElement("img");
    pastryImg.src = "./src/assets/pastry.jpg";
    pastryPhoto.appendChild(pastryImg);
    const pastryDes = document.createElement("div");
    pastryDes.innerHTML = "Savor the exquisite delight of our beautiful restaurant's signature pastry. Crafted with love and precision, this mouthwatering creation is a true culinary masterpiece. The moment you take your first bite, you'll be greeted by a symphony of flavors that dance on your palate. The pastry's delicate outer layer reveals a light and fluffy interior, creating a perfect contrast in textures. Each bite is a blissful experience, as the pastry unveils layers of delectable sweetness that tantalize your taste buds. Expertly crafted and adorned with a touch of artistic elegance, this pastry embodies the essence of our restaurant's commitment to exceptional quality and unforgettable dining experiences. Indulge in a moment of pure gastronomic bliss with our truly delicious and captivating pastry.";
    pastryImg.classList.add("foodPhoto");
    pastryDes.classList.add("foodDescription");
    pastry.appendChild(pastryImg);
    pastry.appendChild(pastryDes);

    const salad = document.createElement("div");
    salad.classList.add("food");
    const saladPhoto = document.createElement("div");
    const saladImg = document.createElement("img");
    saladImg.src = "./src/assets/salad2.jpg";
    saladPhoto.appendChild(saladImg);
    const saladDes = document.createElement("div");
    saladDes.innerHTML = "Savor the exquisite delight of our beautiful restaurant's signature salad. Crafted with love and precision, this mouthwatering creation is a true culinary masterpiece. The moment you take your first bite, you'll be greeted by a symphony of flavors that dance on your palate. The salad's delicate outer layer reveals a light and fluffy interior, creating a perfect contrast in textures. Each bite is a blissful experience, as the salad unveils layers of delectable sweetness that tantalize your taste buds. Expertly crafted and adorned with a touch of artistic elegance, this salad embodies the essence of our restaurant's commitment to exceptional quality and unforgettable dining experiences. Indulge in a moment of pure gastronomic bliss with our truly delicious and captivating salad.";
    saladImg.classList.add("foodPhoto");
    saladDes.classList.add("foodDescription");
    salad.appendChild(saladImg);
    salad.appendChild(saladDes);

    menu.appendChild(pizza);
    menu.appendChild(pastry);
    menu.appendChild(salad);

    return menu;
}

export default menu;