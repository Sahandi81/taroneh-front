export function addItemToCart(cartItems, cartItemToAdd) {
 
  const existingCartItem = cartItems.find(
    cartItem =>
      cartItem.id === cartItemToAdd.id &&
      cartItem.weight === cartItemToAdd.weight
  );

  let items = [];

  if (existingCartItem) {
    items = cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id &&
      cartItem.weight === cartItemToAdd.weight
        ? { ...cartItem, quantity:  1 + cartItemToAdd.quantity }
        : cartItem
    );
    return items;
  }

  items = [
    ...cartItems,
    { ...cartItemToAdd, quantity: cartItemToAdd.quantity }
  ];
  return items;
}

export function removeItemFromCart(cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find(
    cartItem =>
      cartItem.id === cartItemToRemove.id &&
      cartItem.weight === cartItemToRemove.weight
  );

  let items = [];

  if (existingCartItem.quantity === 1) {
    items = cartItems.filter(
      cartItem =>
        cartItem.id !== cartItemToRemove.id &&
        cartItem.weight !== cartItemToRemove.weight
    );
    return items;
  }

  items = cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id &&
    cartItem.weight === cartItemToRemove.weight
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return items;
}

export function calculateCartItemsTotalPrice(cartItems) {
  return cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,
    0
  );
}
