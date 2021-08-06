import Vue from 'vue';
import Vuex from 'vuex';
import uniqueArray from '@/helpers/uniqueArray.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAddNoteShown: false,
    isListView: false,
    isAllNotesMarked: false,
    isFilterShown: false,
    appliedFilters: {
      marked: false,
      favorite: false
    },
    notes: [],
    filteredNotes: []
  },
  mutations: {
    toggleNewNote (state) {
      state.isAddNoteShown = !state.isAddNoteShown;
    },
    toggleListView (state) {
      state.isListView = !state.isListView;
    },
    toggleFilter (state) {
      state.isFilterShown = !state.isFilterShown;
    },
    applyFilters (state) {
      state.filteredNotes = [];
      for (const field in state.appliedFilters) {
        if (state.appliedFilters[field] === true) {
          const arrToConcat = state.notes.filter(item => item[field] === true);
          state.filteredNotes = uniqueArray(state.filteredNotes.concat(arrToConcat));
        }
      }
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
