
import {shelf, cart, currentTotal, addToCart, removeFromCart, findCurrent as findCurrentTotal, clearCart} from "./cart-functions.js"
import { addEventListeners } from "./site-functions.js";

const addBtns = document.querySelectorAll('.add-btn');

addEventListeners(addBtns);

findCurrentTotal(cart)
console.log('Cart:');
console.log(cart);
console.log(`Current total: $${currentTotal}`);