import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAddNoteShown: false,
    isListView: false,
    notes: []
  },
  mutations: {
    toggleNewNote (state) {
      state.isAddNoteShown = !state.isAddNoteShown;
    },
    toggleListView (state) {
      state.isListView = !state.isListView;
    },
    updateNotes (store) {
      localStorage.notes ? store.notes = JSON.parse(localStorage.notes) : store.notes = []
    }
  },
  actions: {
  },
  modules: {
  }
})
