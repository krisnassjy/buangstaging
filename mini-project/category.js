let carouselData = [
  { src: `https://onlinegallery.art/images/artworks/405980yqiajdxs.jpeg` },
  { src: `https://onlinegallery.art/images/artworks/stummes-zwiegesprach.jpg` },
  { src: `https://onlinegallery.art/images/artworks/dsc-0331ron.jpg` },
];

let homeData = [
  {
    name: "ghost house",
    src: "./assets/images/1.jpg",
    latest: true,
    category: "dark",
  },
  {
    name: "river with rocks",
    src: "./assets/images/2.jpg",
    latest: true,
    category: "dark",
  },
  {
    name: "firework",
    src: "./assets/images/3.jpg",
    latest: true,
    category: "dark",
  },
  {
    name: "black wall",
    src: "./assets/images/4.jpg",
    latest: true,
    category: "dark",
  },
  {
    name: "a man contemplate",
    src: "./assets/images/5.jpg",
    latest: false,
    category: "dark",
  },
  {
    name: "night nature",
    src: "./assets/images/6.jpg",
    latest: false,
    category: "dark",
  },
  {
    name: "dark couple",
    src: "./assets/images/7.jpg",
    latest: false,
    category: "dark",
  },
  {
    name: "sunset",
    src: "./assets/images/8.jpg",
    latest: false,
    category: "dark",
  },
  {
    name: "dark forest",
    src: "./assets/images/9.jpg",
    latest: true,
    category: "dark",
  },
];

const latestContainer = document.querySelector(".latest");
console.log(latestContainer);
const newestContainer = document.querySelector(".newest");

loading = await new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(false);
  }, 3000);
});

const header = document.querySelector(".head");
const skeleton = document.querySelector(".placeholder");
header.removeChild(skeleton);
const carousel = document.createElement("div");

carousel.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide p-0" data-bs-ride="carousel">
  <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style="max-height: 600px;">
     
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </a>
</div>`;

header.appendChild(carousel);

const containerCarousel = document.querySelector(".carousel-inner");
let element = "";

carouselData.map((item, i) => {
  if (i === 0) {
    element = document.createElement("div");
    element.classList.add("carousel-item", "active");
    element.innerHTML = `<img src="https://onlinegallery.art/images/artworks/405980yqiajdxs.jpeg"
          class="d-block w-100 object-fit-cover" alt="Slide 0">`;
  } else {
    element = document.createElement("div");
    element.classList.add("carousel-item");
    element.innerHTML = `<img src="${item.src}"
          class="d-block w-100 object-fit-cover" alt="Slide ${i + 1}">`;
  }
  containerCarousel.appendChild(element);
});

latestContainer.innerHTML = "";
newestContainer.innerHTML = "";

homeData.map((item) => {
  const element = document.createElement("div");
  element.classList.add("col-lg-3", "col-md-4", "col-sm-11", "my-2");
  element.style.maxHeight = "400px";

  const card = document.createElement("div");
  card.classList.add("card", "p-0", "m-0", "h-100");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "w-100", "h-100", "p-0", "m-0");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "";
  img.classList.add("img-fluid", "w-100", "h-100");

  cardBody.appendChild(img);
  card.appendChild(cardBody);
  element.appendChild(card);
  if (item.latest) {
    latestContainer.appendChild(element);
  } else {
    newestContainer.appendChild(element);
  }
});
