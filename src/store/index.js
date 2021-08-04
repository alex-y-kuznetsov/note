import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAddNoteShown: false,
    isListView: false
  },
  mutations: {
    toggleNewNote (state) {
      state.isAddNoteShown = !state.isAddNoteShown;
    },
    toggleListView (state) {
      state.isListView = !state.isListView;
    }
  },
  actions: {
  },
  modules: {
  }
})
