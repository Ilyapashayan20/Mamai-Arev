import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import About from '../pages/About.vue'
import Gallery from '../pages/Gallery.vue'
import Contact from '../pages/Contact.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home Page',
    },
  },
  {
    path: '/products',
    name: 'shop',
    component: Shop,
    meta: {
      title: 'Products Page',
    },

  },
  {
    path: '/product/:id',
    name: 'porduct-details',
    component: ProductDetails,
    meta: {
      title: 'Product',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Page',
    },
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: {
      title: 'Gallery Page',
    },
  },
  {
    path:'/contact',
    name:'contact',
    component: Contact,
    meta: {
      title: 'Contact Page',
    },
  },
  {
    path:'/checkout',
    name: 'checkout',
    component: Checkout,
    meta:{
      title: 'Checkout'
    }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../pages/NotFound.vue'),
    meta:{
      title: 'Page Not Found',
    }
  }
  


]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});


export default router
