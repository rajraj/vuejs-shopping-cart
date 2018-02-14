export default {
  setProducts(state, products) {
    state.products = products
  },

  pushProductToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
  },

  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++
  },

  decrementProductInventory(state, product) {
    product.inventory--
  },

  emptyCart(state) {
    state.cart = []
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  }
}
