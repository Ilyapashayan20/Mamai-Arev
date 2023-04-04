const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');

export default {
  state() {
    const totalPriceProducts = cartProducts.reduce((total, product) => total + (product.quantity * product.price), 0);

    return {
      cartProducts: Array.isArray(cartProducts) ? cartProducts : [],
      cartProductCount: Array.isArray(cartProducts) ? cartProducts.length : 0,
      totalPriceProducts
    }
  },
  actions: {
    addProductsToCart({ commit, state }, { product, quantity }) {
      let cartProducts = [...state.cartProducts];
      const existingProductIndex = cartProducts.findIndex(p => p._id === product._id);
      if (existingProductIndex !== -1) {
        const existingProduct = cartProducts[existingProductIndex];
        cartProducts[existingProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + quantity,
          showRemove: false,
        };
      } else {
        cartProducts.push({ ...product, quantity });
      }
      commit('SET_CART_PRODUCTS', cartProducts);
    },
    removeProductFromCart({ commit, state }, productId) {
      const cartProducts = state.cartProducts.filter(product => product._id !== productId);
      commit('SET_CART_PRODUCTS', cartProducts);
    },

    increaseProductQuantity({ commit, state }, productId) {
      const cartProducts = [...state.cartProducts];
      const existingProductIndex = cartProducts.findIndex(p => p._id === productId);
      if (existingProductIndex !== -1) {
        const existingProduct = cartProducts[existingProductIndex];
        cartProducts[existingProductIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1
        };
        commit('SET_CART_PRODUCTS', cartProducts);
      }
    },
    decreaseProductQuantity({ commit, state }, productId) {
      const cartProducts = [...state.cartProducts];
      const existingProductIndex = cartProducts.findIndex(p => p._id === productId);
      if (existingProductIndex !== -1) {
        const existingProduct = cartProducts[existingProductIndex];
        if (existingProduct.quantity > 1) {
          cartProducts[existingProductIndex] = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1
          };
          commit('SET_CART_PRODUCTS', cartProducts);
        } 
      }
    },
    clearCart({commit}){
      commit('CLEAR_CART')
    }
  },
  mutations: {
    SET_CART_PRODUCTS(state, cartProducts) {
      state.cartProducts = cartProducts;
      state.cartProductCount = cartProducts.length;
      state.totalPriceProducts = cartProducts.reduce((total, product) => total + (product.quantity * product.price), 0);
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    },
    CLEAR_CART(state) {
      state.cartProducts = [];
      state.cartProductCount = 0
      state.totalPriceProducts = 0
      localStorage.removeItem('cartProducts');
    },
  },
  getters: {
    getCartProductCount(state) {
      return state.cartProductCount;
    },
    getCartProducts(state) {
      return state.cartProducts;
    },
    getTotalCartProducts(state) {
      return state.totalPriceProducts;
    }
  }
}