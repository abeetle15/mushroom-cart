import { addToCart, removeFromCart, cart, currentTotal, findCurrent, shelf } from "./cart-functions.js"
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
        header.removeChild(header.lastChild);
        refreshQuants();
      }
    })
  } 
  else if (cartFlag) {
    cartFlag = false;
    header.removeChild(header.lastChild);
    refreshQuants();
  }
}

function refreshQuants() {
 const toRefresh = document.querySelectorAll('.shelf-quant');
 for (let p of toRefresh) {
  p.innerHTML = `${cart[p.id].quantity} Kg`
 }
}

function createChildren() {
  for (let item in cart) {
    const newChild = document.createElement('div');
    newChild.className = 'cart-item-cont';
    newChild.innerHTML = `
      <div id="cart-img-cont">
       <img id="cart-item-img" class="item-char" src="${shelf[item].img}" alt="">
      </div>`;
    const charsCont = document.createElement('div');
    charsCont.id = "chars-cont";
    charsCont.innerHTML = `<div id="cart-item-name" class="item-char">${cart[item].name}</div>`;

    const numbersDiv = document.createElement('div');
    numbersDiv.id = 'numbers-cont';

    const cartQuant = document.createElement('div');
    cartQuant.id = "cart-item-quantity";
    cartQuant.className = 'item-char';
    cartQuant.innerHTML = `${cart[item].quantity}kg`;
    numbersDiv.appendChild(cartQuant);

    const rmvBtn = document.createElement('button');
    rmvBtn.id = `${cart[item].name}-btn-decrease`;
    rmvBtn.className = 'add-btn';
    rmvBtn.innerHTML = '-';
    
    numbersDiv.appendChild(rmvBtn);

    const addBtn = document.createElement('button');
    addBtn.id = `${cart[item].name}-btn-increase`;
    addBtn.className = 'add-btn';
    addBtn.innerHTML = '+';
    numbersDiv.appendChild(addBtn);

    const cartPrice = document.createElement('div');
    cartPrice.id = "cart-item-price";
    cartPrice.className = 'item-char';
    cartPrice.innerHTML = `${cart[item].price}$`;
    numbersDiv.appendChild(cartPrice);

    charsCont.appendChild(numbersDiv)
    newChild.appendChild(charsCont)
    this.appendChild(newChild);
    rmvBtn.addEventListener('click', () => { 
      if (cart[item].quantity > 1) {
        handleNewDecrease(cart[item].id, cartQuant, cartPrice)
        refreshQuants()
      }
      else {
        console.log(this)
      }
      totalDiv.innerHTML = `
      <div id="total-cont">
      <p>Total:</p>
      <p id="total-display">${currentTotal}$</p>
       </div>
      `;
    })
    addBtn.addEventListener('click', () => { 
      handleNewIncrease(cart[item].id, cartQuant, cartPrice)
      refreshQuants();
      totalDiv.innerHTML = `
      <div id="total-cont">
      <p>Total:</p>
      <p id="total-display">${currentTotal}$</p>
       </div>
      `;
    })
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
  newP.className = 'shelf-quant'
  newP.id = `${id}`;
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

function handleNewIncrease(id, quant, price) {
  addToCart(id);
  quant.innerHTML = `${cart[id].quantity} Kg`;
  if (price) {
    price.innerHTML = `${cart[id].price}$`;
  }
}

function handleNewDecrease(id, quant, price) {
  removeFromCart(id);
  quant.innerHTML = `${cart[id].quantity} Kg`;
  price.innerHTML = `${cart[id].price}$`;
}