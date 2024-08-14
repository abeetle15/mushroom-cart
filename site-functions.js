import { addToCart } from "./cart-functions"

export function addEventListeners(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', ()=> {
      addToCart(i)
    })
  }
}