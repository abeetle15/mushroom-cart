
import {shelf, cart, currentTotal, addToCart, removeFromCart, findCurrent as findCurrentTotal, clearCart} from "./cart-functions.js"
import { addEventListenersAdd, showCart, updateAlert } from "./site-functions.js";


const addBtns = document.querySelectorAll('.add-btn');
export const basketAlert = document.querySelector('#basket-alert');

addEventListenersAdd(addBtns);


/* ---------------------------------- test ---------------------------------- */
showCart()
