import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAddNoteShown: false
  },
  mutations: {
    toggleNewNote (state) {
      state.isAddNoteShown = !state.isAddNoteShown;
    }
  },
  actions: {
  },
  modules: {
  }
})
