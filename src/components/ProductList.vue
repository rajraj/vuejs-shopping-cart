<template lang="html">
  <div class="products">
    <h1>Product List</h1>
    <img v-if="loading" src="http://www.twimads.com/local/files/games/pregnant-princess-shopping/images/_preloader.gif" alt="Loading">
    <ul v-else>
      <li v-for="product in products">
        {{product.title}} - {{product.price | currency}}
        <button type="button" :disabled="!productIsInStock(product)" @click="addProductToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },

  computed: {
    ...mapState({
      products: state => state.products
    }),

    ...mapGetters({
      productIsInStock: 'productIsInStock'
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'
    })
  },

  created() {
    this.loading = true
    this.fetchProducts().then(() => this.loading = false)
  }
}
</script>
