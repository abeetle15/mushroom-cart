import { addToCart, cart, currentTotal, findCurrent } from "./cart-functions.js"

export function addEventListeners(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', ()=> {
      addToCart(i);
      showCart();
    })
  }
}

export function showCart() {
  console.clear();
  console.log('Cart:')
  console.log(cart)
  findCurrent(cart)
  console.log(`Current total: ${currentTotal}`)
}