export default {
    state() {
        return {
            showCart: false
        }
    },
    actions: {
        showCart({commit}) {
            const val = true;
            commit('SET_SHOW_CART', val)
        },
        hideCart({commit}) {
            const val = false;
            commit('SET_SHOW_CART', val)

        }
    },
    mutations: {
        SET_SHOW_CART(state,val) {
            state.showCart = val
        }
    },
    getters: {
        showCart(state) {
            return state.showCart
        }
    }
}