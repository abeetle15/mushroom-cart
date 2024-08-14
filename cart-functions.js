export const shelf = [
  { name: "Shiitake", pricePerKg: 20, shelfIndex: 0 },
  { name: "Oyster", pricePerKg: 15, shelfIndex: 1 },
  { name: "Portobello", pricePerKg: 18, shelfIndex: 2 },
  { name: "Chanterelle", pricePerKg: 40, shelfIndex: 3 },
  { name: "Morel", pricePerKg: 50, shelfIndex: 4 },
  { name: "Lion's Mane", pricePerKg: 35, shelfIndex: 5 },
  { name: "Maitake", pricePerKg: 25, shelfIndex: 6 },
  { name: "Enoki", pricePerKg: 12, shelfIndex: 7 },
  { name: "Porcini", pricePerKg: 30, shelfIndex: 8 },
  { name: "Truffle", pricePerKg: 200, shelfIndex: 9 }
];

export const cart = {};
export let currentTotal;

export function addToCart(shelfIndex) {
  const item = shelf[shelfIndex].shelfIndex
  cart[item] = (cart[item] || {})
  cart[item].name = shelf[shelfIndex].name
  cart[item].quantity = (cart[item].quantity || 0) + 1;
  cart[item].price = cart[item].quantity * shelf[shelfIndex].pricePerKg;
  cart[item].shelfIndex = shelf[shelfIndex].shelfIndex 
}

export function removeFromCart(shelfIndex) {
  const item = cart[shelfIndex];
  if (item) {
    item.quantity--;
    item.price = item.quantity * shelf[shelfIndex].pricePerKg;
    if (item.quantity < 1) {
      delete cart[shelfIndex];
    }
  }
}

export function findCurrent(cart) {
  currentTotal = 0;
  for (let item in cart) {
    currentTotal += cart[item].price
  }
}

export function clearCart(cart) {
  
}