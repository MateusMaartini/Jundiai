const restaurants = [
  {
    name: "Vittoria Osteria & Carni",
    menu: "Menu Italiana, Steakhouse",
    price: 40,
    rating: 4,
    type: "restaurante",
    meal: "almoco",
    priceCategory: "intermediario",
    imageUrl: "https://via.placeholder.com/250x150?text=Vittoria+Osteria",
    status: "Fechado agora",
    menuUrl: "menu.html#vittoria",
  },
  {
    name: "Doceria B",
    menu: "Menu B",
    price: 15,
    rating: 4,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "barato",
    imageUrl: "https://via.placeholder.com/250x150?text=Doceria+B",
    status: "Aberto",
    menuUrl: "menu.html#doceria-b",
  },
  {
    name: "Bar C",
    menu: "Menu C",
    price: 50,
    rating: 3,
    type: "bar",
    meal: "janta",
    priceCategory: "caro",
    imageUrl: "https://via.placeholder.com/250x150?text=Bar+C",
    status: "Aberto",
    menuUrl: "menu.html#bar-c",
  },
  {
    name: "Restaurante D",
    menu: "Menu D",
    price: 25,
    rating: 2,
    type: "restaurante",
    meal: "brunch",
    priceCategory: "barato",
    imageUrl: "https://via.placeholder.com/250x150?text=Restaurante+D",
    status: "Fechado agora",
    menuUrl: "menu.html#restaurante-d",
  },
  {
    name: "Doceria E",
    menu: "Menu E",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl: "https://via.placeholder.com/250x150?text=Doceria+E",
    status: "Aberto",
    menuUrl: "menu.html#doceria-e",
  },
];

function displayRestaurants(filteredRestaurants) {
  const restaurantList = document.getElementById("restaurant-list");
  restaurantList.innerHTML = ""; // Limpa a lista atual

  if (filteredRestaurants.length === 0) {
    restaurantList.innerHTML =
      "<p>Nenhum restaurante encontrado com os filtros aplicados.</p>";
  } else {
    filteredRestaurants.forEach((restaurant) => {
      const card = document.createElement("div");
      card.className = "restaurant-card";
      card.innerHTML = `
              <img src="${restaurant.imageUrl}" alt="${restaurant.name}">
              <div class="card-info">
                  <h3>${restaurant.name}</h3>
                  <p><strong>${restaurant.menu}</strong></p>
                  <p>R$${restaurant.price.toFixed(2)}</p>
                  <p>${"★".repeat(restaurant.rating)}${"☆".repeat(
        5 - restaurant.rating
      )} (${restaurant.rating})</p>
                  <p>Status: ${restaurant.status}</p>
                  <a href="${
                    restaurant.menuUrl
                  }" class="menu-icon"><i class="fas fa-utensils"></i> Cardápio</a>
              </div>
          `;
      restaurantList.appendChild(card);
    });
  }
}

function filterRestaurants() {
  const rating = document.getElementById("rating").value;
  const type = document.getElementById("type").value;
  const meal = document.getElementById("meal").value;
  const price = document.getElementById("price").value;

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (rating === "" || restaurant.rating.toString() === rating) &&
      (type === "" || restaurant.type === type) &&
      (meal === "" || restaurant.meal === meal) &&
      (price === "" || restaurant.priceCategory === price)
    );
  });

  displayRestaurants(filteredRestaurants);
}

// Exibe todos os restaurantes ao carregar a página
displayRestaurants(restaurants);
