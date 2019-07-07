import {
  HTTP
} from '../HttpCommon';

export const state = {
  items: [],
  loading: true
}
export const mutations = {
  updateHotels(state, resp) {
    state.items = resp;
  },
  loadingHotels(state, loading) {
    state.loading = loading
  }
}

export const actions = {

  //  получаем
  GET_HOTELS({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {

      HTTP.get(payload).then(response => {
          commit('updateHotels', response.data);
          commit('loadingHotels', false);
        })
        .catch(error => {
          console.log('Error! ', error);
        })
    })
  }
  //--
}

export const getters = {
  hotels: state => state.hotels,
}

export default {
  state,
  getters,
  actions,
  mutations
}