
import {shelf, cart, currentTotal, addToCart, removeFromCart, findCurrent as findCurrentTotal, clearCart} from "./cart-functions.js"

const addBtns = document.querySelectorAll('.add-btn');
console.log(addBtns)


findCurrentTotal(cart)
console.log('Cart:');
console.log(cart);
console.log(`Current total: $${currentTotal}`);