<template>
  <div class="app">
    <main>
      <!-- <searchInput
        :searchKeyword="searchKeyword"
        @input="updateSearchKeyword"
      ></searchInput> -->
      <searchInput
        v-model="searchKeyword"
        @search="searchProducts"
      ></searchInput>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <v-btn class="btn" @click="moveToCartPage"> cart </v-btn>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { fetchProductsByKeyword } from '../api';
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'Main',
  components: { SearchInput },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products');
    const products = response.data.map(item => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      };
    });

    return { products };
  },
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword);
      this.products = response.data.map(item => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        };
      });
    },
    moveToCartPage() {
      this.$router.push('/cart');
    },
  },
  // data() {
  //   return {
  //     products: [],
  //   };
  // },
  // async created() {
  //   const response = await axios.get('http://localhost:3000/products');
  //   this.products = response.data;
  // },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
