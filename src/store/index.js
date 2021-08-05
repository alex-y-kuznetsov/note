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
    createNewNote (state, newNote) {
      state.notes.unshift(newNote);
    },
    updateNotes (state) {
      localStorage.notes ? state.notes = JSON.parse(localStorage.notes) : state.notes = [];
      for (let i = 0; i < state.notes.length; i++) {
        state.notes[i].id = i;
      }
    },
    clearNotes (state) {
      state.notes = []
    },
    saveNotesInStorage (state) {
      if (!localStorage.notes) {
        localStorage.setItem('notes', JSON.stringify(state.notes))
      } else {
        localStorage.notes = JSON.stringify(state.notes);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
