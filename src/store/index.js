import Vue from 'vue'
import Vuex from 'vuex'

// modules
import hotels from './modules/hotels'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hotels
  },
  // getters: {
  //   config: state => state.token
  // }
})
export default store