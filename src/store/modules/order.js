import axios from "axios";

export default {
    state() {
        return {
            orderSuccessfull: false,
            isLoading: false,
        }
    },
    actions:{
        async crateOrder({commit}, order){
            commit('SET_LOADING', true)
            axios.post('/neworder', order)
            .then( response =>{
                const res =response.data.success

                commit('SET_SUCCESS', res)
            }).catch(err =>{
                console.error(err)
            }).finally(()=>{
                commit('SET_LOADING', false)
            })
        },

        hidePopup({commit}){
            commit('SET_SUCCESS', false)
        }

    },
    mutations:{
        SET_LOADING(state, boolean){
            state.isLoading = boolean
        },
        SET_SUCCESS(state, res){
            state.orderSuccessfull = res
        }

    },
    getters:{
        orderLoading(state){
            return state.isLoading
        },
        orderSuccessfull(state){
            return state.orderSuccessfull
        }
    }
}