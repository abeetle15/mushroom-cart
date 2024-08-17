
import {shelf, cart, currentTotal, addToCart, removeFromCart, findCurrent as findCurrentTotal, clearCart} from "./cart-functions.js"
import { addEventListenersAdd, handleCartBtn, showCart, updateAlert } from "./site-functions.js";

const addBtns = document.querySelectorAll('.add-btn');
export const header = document.querySelector('#header-cont')
export const basketAlert = document.querySelector('#basket-alert');
const cartBtn = document.querySelector('#basket-cont');
export const mainCont =  document.querySelector('#main-cont');
const cartCont = document.querySelector('.cart-cont');

addEventListenersAdd(addBtns);
cartBtn.addEventListener('click', handleCartBtn)


/* ---------------------------------- test ---------------------------------- */
showCart()
