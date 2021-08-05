import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAddNoteShown: false,
    isListView: false,
    isAllNotesMarked: false,
    notes: []
  },
  mutations: {
    toggleNewNote (state) {
      state.isAddNoteShown = !state.isAddNoteShown;
    },
    toggleListView (state) {
      state.isListView = !state.isListView;
    },
    toggleMarkAllNotes (state) {
      if (state.notes.some(item => item.marked === false)) {
        state.notes.forEach(item => {
          item.marked = true;
        });
        state.isAllNotesMarked = true;
      } else {
        state.notes.forEach(item => {
          item.marked = false;
        });
        state.isAllNotesMarked = false;
      }
    },
    createNewNote (state, newNote) {
      state.notes.unshift(newNote);
    },
    deleteNote (state, id) {
      state.notes.forEach((item, index) => {
        if (item.id === id) {
          state.notes.splice(index, 1);
        }
      })
    },
    updateNotes (state) {
      localStorage.notes ? state.notes = JSON.parse(localStorage.notes) : state.notes = [];
      state.notes.some(item => item.marked === false) ? state.isAllNotesMarked = false : state.isAllNotesMarked = true;
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
