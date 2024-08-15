import { addToCart, cart, currentTotal, findCurrent } from "./cart-functions.js"
import {basketAlert} from "./main.js"

export function addEventListenersAdd(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', ()=> {
      addToCart(i);
      showCart();
    })
  }
}

export function showCart() {
  console.clear()
  console.log('Cart:')
  console.log(cart)
  findCurrent()
  console.log(`Current total: ${currentTotal}`)
}

export function updateAlert() {
  if (Object.keys(cart).length !== 0) {
    basketAlert.classList.add('show');
    basketAlert.textContent = Object.keys(cart).length;
  }
  else if (Object.keys(cart).length === 0) {
    basketAlert.classList.remove('show')
  }
}