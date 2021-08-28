import { createStore } from 'vuex';
import productModule from './modules/products/product.js';
import cartModule from './modules/cart/cart.js';

const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  getters: {
    userAuth(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  }
});

export default store;
