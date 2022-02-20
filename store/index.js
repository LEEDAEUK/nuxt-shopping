import { fetchCartItems } from '../api';

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    };
    state.cartItems.push(newCartItem);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
};

export const actions = {
  async FETCH_CART_ITEMS({ commit }) {
    const { data } = await fetchCartItems();
    commit(
      'setCartItems',
      data.map(item => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      })),
    );
  },

  // nuxtServerInit은 nuxt app의 create와 같다. 약속된 값
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch('FETCH_CART_ITEMS');
  },
};
