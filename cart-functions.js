import { showCart, updateAlert } from "./site-functions.js";

export const shelf = [
  { name: "Shiitake", pricePerKg: 20, id: 0, img: "./images/shiitake.jpg" },
  { name: "Oyster", pricePerKg: 15, id: 1, img: "./images/oyster.jpg" },
  { name: "Portobello", pricePerKg: 18, id: 2, img: "./images/portobello.jpg" },
  { name: "Chanterelle", pricePerKg: 40, id: 3, img: "./images/chanterelle.jpg" },
  { name: "Morel", pricePerKg: 50, id: 4, img: "./images/morel.jpg" },
  { name: "Lion's Mane", pricePerKg: 35, id: 5, img: "./images/lions-mane.jpg" },
  { name: "Maitake", pricePerKg: 25, id: 6, img: "./images/maitake.jpg" },
  { name: "Enoki", pricePerKg: 12, id: 7, img: "./images/enoki.jpg" },
  { name: "Porcini", pricePerKg: 30, id: 8, img: "./images/porcini.jpg" },
  { name: "Truffle", pricePerKg: 200, id: 9, img: "./images/truffle.jpg" }
];

export const cart = {};
export let currentTotal;

export function addToCart(productId) {
  const product = shelf.find(item => item.id === productId);
  if (!product) {return};

  if (!cart[productId]) {
    cart[productId] = {
      name: product.name,
      quantity: 0,
      price: 0,
      id: productId
    }
  }
  cart[productId].quantity++;
  cart[productId].price = cart[productId].quantity * product.pricePerKg;
  findCurrent()
  updateAlert()
  showCart()
}

export function removeFromCart(id) {
  const item = cart[id];
  if (!item) {return}

  item.quantity--;
  item.price = item.quantity * shelf[id].pricePerKg;
  if (item.quantity <= 0) {
    delete cart[id];
  }
    findCurrent()
    updateAlert()
    showCart()
}

export function findCurrent() {
  currentTotal = Object.values(cart).reduce((total, item) => total + item.price, 0);
  return currentTotal
}

export function clearCart() {
  for (let key in cart) {
    if (cart.hasOwnProperty(key)) {
      delete cart[key]
    }
  }
  findCurrent()
  updateAlert()
}