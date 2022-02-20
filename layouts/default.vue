<template>
  <div>
    <header class="title">
      <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  color: green;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
