<template>
  <div class="input-wrapper flex">
    <input
      type="text"
      :value="value"
      class="search-input"
      @input="$emit('input', $event.target.value)"
    />
    <v-btn class="btn" @click="$emit('search')">Search</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
