const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 72200,
    colors: [
      {
        code: "pink",
        img: "./img/iphone15pink.jpg",
      },
      {
        code: "yellow",
        img: "./img/iphone15yellow.jpg",
      },
      {
        code: "green",
        img: "./img/iphone15green.jpg",
      },
      {
        code: "blue",
        img: "./img/iphone15blue.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    price: 137990,
    colors: [
      {
        code: "black",
        img: "./img/iphone15problack.jpg",
      },
      {
        code: "darkblue",
        img: "./img/iphone15problue.jpg",
      },
      {
        code: "gray",
        img: "./img/iphone15progray.jpg",
      },
      {
        code: "white",
        img: "./img/iphone15prowhite.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max",
    price: 156990,
    colors: [
      {
        code: "black",
        img: "./img/iphone15promaxblack.webp",
      },
      {
        code: "darkblue",
        img: "./img/iphone15promaxblue.webp",
      },
      {
        code: "gray",
        img: "./img/iphone15promaxgray.webp",
      },
      {
        code: "white",
        img: "./img/iphone15promaxwhite.webp",
      },
    ],
  },
  {
    id: 4,
    title: "iPhone 15 Plus",
    price: 81600,
    colors: [
      {
        code: "pink",
        img: "./img/iphone15pluspink.jpg",
      },
      {
        code: "yellow",
        img: "./img/iphone15plusyellow.jpg",
      },
      {
        code: "green",
        img: "./img/iphone15plusgreen.jpg",
      },
      {
        code: "blue",
        img: "./img/iphone15plusblue.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Function to initialize the product details for the first product (iPhone 15)
function initializeProductDetails() {
  // Set the chosen product to the first product in the array
  choosenProduct = products[0];

  // Set the initial product details
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "₹" + " " + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;

  // Set the color options to the colors of the first product
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
  });

  // Clear any previously selected size options
  currentProductSizes.forEach((size) => {
    size.style.backgroundColor = "white";
    size.style.color = "black";
  });
}

// Call the function to initialize product details when the page loads
window.addEventListener("load", initializeProductDetails);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(-${100 * index}%)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + " " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
