const restaurants = [
  {
    name: "Vittoria Osteria & Carni",
    menu: "Menu Italiana, Steakhouse",
    price: 40,
    rating: 5,
    type: "restaurante",
    meal: "almoco",
    meal: "janta",

    priceCategory: "intermediario",
    imageUrl:
      "https://th.bing.com/th/id/OIP.l4GbN4Dw_SktNmZ_JfHggQHaE8?w=550&h=367&rs=1&pid=ImgDetMain",
    status: "Fechado agora",
    menuUrl: "https://vittoriaosteria.com.br/cardapio-vittoria/",
  },
  {
    name: "Vila Catá",
    menu: "Italiana, Brasileira",
    price: 15,
    rating: 4,
    type: "restaurante",
    meal: "almoco",

    priceCategory: "barato",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/25/69/69/a9/sp.jpg",
    status: "Aberto",
    menuUrl: "https://vila-cat.goomer.app",
  },
  {
    name: "Churrascaria da Fazenda",
    menu: "Steakhouse, Brasileira",
    price: 50,
    rating: 3,
    type: "restaurante",
    meal: "janta",
    priceCategory: "caro",
    imageUrl:
      "https://www.elissalles.com.br/imagens/restaurante_fazenda(2).jpg",
    status: "Aberto",
    menuUrl: "http://churrascariadafazenda.com.br/menu/",
  },
  {
    name: "Família Brunholi Restaurante",
    menu: "Italiana",
    price: 25,
    rating: 4,
    type: "restaurante",
    meal: "almoco",

    priceCategory: "barato",
    imageUrl:
      "https://irs3.4sqi.net/img/general/600x600/83508669_hUsIhcqAYXzfZ4naHJHzyEb9af5hb79oXPi37SmeJF8.jpg",
    status: "Fechado agora",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Pizzeria Verace Napoletana",
    menu: "Italiana, Pizza",
    price: 20,
    rating: 5,
    type: "restaurante",
    meal: "janta",

    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Coco Bambu Jundiaí",
    menu: "Brasileira, Internacional",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://www.refugiosnointerior.com.br/sistema/_lib/file/img/lugar/6195/restaurante_coco_bambua.jpg",
    status: "Aberto",
    menuUrl: "https://livemenu.app/menu/608195cb7126f0419c2bb73e",
  },
  {
    name: "Chocovi",
    menu: "Doceria",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Doceria B",
    menu: "Italiana, Pizza",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Doceria C",
    menu: "Italiana, Pizza",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Doceria D",
    menu: "Italiana, Pizza",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Doceria E",
    menu: "Italiana, Pizza",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Doceria F",
    menu: "Italiana, Pizza",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Quintal Latorre",
    menu: "Bares e pubs, Brasileira",
    price: 20,
    rating: 5,
    type: "bar",
    meal: "janta",
    priceCategory: "intermediario",
    imageUrl:
      "https://static.wixstatic.com/media/f92e4a_221f3840679c4ba3b3b15872fc44d850~mv2.jpeg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f92e4a_221f3840679c4ba3b3b15872fc44d850~mv2.jpeg",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Rocket 88 Music Bar",
    menu: "Bares e pubs, Brasileira",
    price: 20,
    rating: 5,
    type: "bar",
    meal: "janta",
    priceCategory: "intermediario",
    imageUrl:
      "https://www.refugiosnointerior.com.br/sistema/_lib/file/img/lugar/4608/rocket_88_music_bar_em_jundiai.jpg",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Pé na Jaca",
    menu: "Bares e pubs, Brasileira",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNIT0OpUkUJdv2jF0KsxYhNgetWLzWc2Pe9F7OB=w1080-k-no",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Chopperia Palma",
    menu: "Bares e pubs, Brasileira",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Bar do Haules",
    menu: "Bar",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
  },
  {
    name: "Options American Bar",
    menu: "Bar",
    price: 20,
    rating: 5,
    type: "doceria",
    meal: "cafe-da-manha",
    priceCategory: "intermediario",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/60/04/50/entrada.jpg?w=1000&h=-1&s=1",
    status: "Aberto",
    menuUrl: "https://veracejundiai.com.br/napoletana",
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
