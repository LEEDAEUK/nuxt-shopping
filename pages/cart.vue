<template>
  <div class="container">
    <h1 class="list-title">카트페이지</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <v-btn> 구매하기 </v-btn>
    </div>
  </div>
</template>

<script>
import CartList from '../components/CartList.vue';
export default {
  components: { CartList },
  // async asyncData({ store }) {
  //   await store.dispatch('FETCH_CART_ITEMS');
  // },
};
</script>
