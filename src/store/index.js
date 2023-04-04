import { createStore } from 'vuex'
import product from "./modules/product.js"
import image from "./modules/image.js"
import cart from "./modules/cart.js"
import globalvariables from './modules/globalvariables.js'
import order from './modules/order.js'

export default createStore({
  modules: {
    product,
    image,
    cart,
    globalvariables,
    order
  }
})