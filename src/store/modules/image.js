import axios from 'axios';

export default {
    state() {
        return {
            pictures: [],
            pictureLoading: false,
        }
    },

    actions: {
        async getGalleryImages({ commit }) {
            commit('SET_LOADING', true)
            axios.get('/pictures')
                .then(response => {
                    const pictures = response.data.pictures;
                    commit('SET_PICTURES', pictures);
                })
                .catch(error => {
                    console.error(error)
                })
                .finally(() => {
                    commit('SET_LOADING', false)
                })
        },


    },
    mutations: {
        SET_PICTURES(state, pictures) {
            state.pictures = pictures
        },
        SET_LOADING(state, boolean) {
            state.pictureLoading = boolean
        },
    },
    getters: {
        getPictures(state) {
            return state.pictures
        },
        loadingPictures(state) {
            return state.pictureLoading
        },
    }
}