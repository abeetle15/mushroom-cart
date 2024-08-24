import { addToCart, cart, currentTotal, findCurrent, shelf } from "./cart-functions.js"
import {basketAlert, header, mainCont} from "./main.js"

export function addEventListenersAdd(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', ()=> {
      updateBtn.call(list[i], i)
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

export let cartFlag = false;

export function handleCartBtn() {
  if (!cartFlag) {
    cartFlag = true;
    const cartDiv = document.createElement('section');
    header.appendChild(cartDiv)
    cartDiv.classList.add('cart-cont');
    createChildren.call(cartDiv);

    document.addEventListener('click', (event) => {
      event.preventDefault();
      if (cartFlag && !header.contains(event.target)) {
        cartFlag = false;
        header.removeChild(header.lastChild)
      }
    })
  } 
  else if (cartFlag) {
    cartFlag = false;
    header.removeChild(header.lastChild)
  }
}

function createChildren() {
  for (let item in cart) {
    const newChild = document.createElement('div');
    newChild.id = 'cart-item-cont';
    newChild.innerHTML = `
      <div id="cart-img-cont">
       <img id="cart-item-img" class="item-char" src="${shelf[item].img}" alt="">
      </div>
      <div id="chars-cont">
        <div id="cart-item-name" class="item-char">${cart[item].name}</div>
        <div id="numbers-cont">
         <div id="cart-item-quantity" class="item-char"><span id="display-kilos">${cart[item].quantity}</span>kg</div>
         <div id="cart-item-price" class="item-char"><span id="display-dollars">${cart[item].price}</span>$</div>
       </div>
      </div>
   `;

    this.appendChild(newChild);
  }
const totalDiv = document.createElement('div');
totalDiv.innerHTML = `
  <div id="total-cont">
    <p>Total:</p>
    <p id="total-display">${currentTotal}$</p>
  </div>
  `;
  this.appendChild(totalDiv)
}

function updateBtn(id) {
  const parent = this.parentNode;
  parent.removeChild(this);

  const newBtnCont = document.createElement('div');
  newBtnCont.className = 'new-btn-cont';

  const newP = document.createElement('p');
  newP.id = `${id}-btn-quant`;
  newBtnCont.appendChild(newP);

  const newBtnIncrease = document.createElement('button');
  newBtnIncrease.id = `${id}-btn-increase`;
  newBtnIncrease.className = 'add-btn';
  newBtnIncrease.innerHTML = '+'
  newBtnCont.appendChild(newBtnIncrease);

  parent.appendChild(newBtnCont)
  parent.addEventListener('click', (event) => {
    if (event.target && event.target.matches(`.add-btn`)) {
      handleNewIncrease(id, newP)
    }
  })
}

function handleNewIncrease(id, p) {
  addToCart(id);
  p.innerHTML = `${cart[id].quantity} Kg`;
}