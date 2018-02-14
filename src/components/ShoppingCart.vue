<template lang="html">
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="product in products">
        {{product.title}} ({{product.price | currency}}) - {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button type="button" @click="checkout" :disabled="enableCheckoutButton">Checkout</button>
    <p>{{checkoutStatus}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotal',
      enableCheckoutButton: 'enableCheckoutButton'
    }),

    ...mapState({
      checkoutStatus: 'checkoutStatus'
    })
  },

  methods: {
    ...mapActions({
      checkout: 'checkout'
    })
  }
}
</script>

<style lang="css">
</style>
