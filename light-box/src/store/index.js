import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lightbox: 0
    },
    mutations: {
        LIGHTBOX(state) {
            state.lightbox += 1
        },
        RESET_LIGHTBOX(state) {
            state.lightbox = 0
        }

    },
    actions: {

    },
    modules: {

    }
})