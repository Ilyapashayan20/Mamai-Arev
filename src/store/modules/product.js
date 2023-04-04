import axios from 'axios';


export default {
    state() {
        return {
            products: [],
            product: [],
            productRecByCategory:[],
            loading: false,
            count: Number,
            queryCategory: null,
        }
    },

    actions: {
        async getProducts({ commit }, options) {
            commit('SET_LOADING', true)
            axios.get('/products', {
                params: options
            })
                .then(responese => {
                    const products = responese.data.products
                    const count = responese.data.count
                    commit('SET_COUNT', count)
                    commit('SET_PRODUCTS', products)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    commit('SET_LOADING', false)
                })
        },

        async getProductbyId({ commit }, id) {
            commit('SET_LOADING', true)
            axios.get(`/products/${id}`)
                .then(response => {
                    const product = response.data
                    commit('SET_PRODUCT', product)
                    axios.get("/product/recomendations", {
                        params: { category : product.category.value }
                    })
                    .then(response =>{
                        const productRecByCategory = response.data.filter(item => item._id !== product._id)
                        commit('SET_PRODUCTRECBYCATEGORY', productRecByCategory)
                    }).catch(error => {
                        console.error(error)
                    })
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    commit('SET_LOADING', false)
                })
        },

        async setCategory({ commit }, category) {
            commit('SET_CATEGORY', category)
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },

        SET_PRODUCT(state, product) {
            state.product = product
        },

        SET_LOADING(state, inProgress) {
            state.loading = inProgress
        },
        SET_COUNT(state, count) {
            state.count = count
        },
        SET_CATEGORY(state, category) {
            state.queryCategory = category
        },
        SET_PRODUCTRECBYCATEGORY(state, productRecByCategory) {
            state.productRecByCategory = productRecByCategory
        }
    },
    getters: {
        Products(state) {
            return state.products
        },
        Product(state) {
            return state.product
        },
        ProductByCategory(state){
            return state.productRecByCategory
        },
        LoadingProduct(state) {
            return state.loading
        },
        Count(state) {
            return state.count
        },
        queryCategory(state){
            return state.queryCategory
        }
    }
}