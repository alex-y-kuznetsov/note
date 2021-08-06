<template>
  <div class="controls">
    <button class="btn"
            v-bind:class="{ 'btn_active': isAddNoteShown }"
            v-on:click.stop="toggleAddNote">
      Add
    </button>
    <button class="btn"
            v-on:click.stop="clearNotesInStorage">
      Clear
    </button>
    <button class="btn"
            v-on:click.stop="toggleMarkAllNotes">
      {{ isAllNotesMarked ? 'Unmark' : 'Mark' }}
    </button>
    <button class="btn"
            v-on:click.stop="toggleView">
      {{ isListView ? 'Tiles' : 'List' }}
    </button>
    <button class="btn"
            v-bind:class="{ 'btn_active': isFilterShown}"
            v-on:click.stop="toggleFilter">
      Filter
    </button>
    <transition name="slide-fade">
      <div class="controls_filter"
          v-if="isFilterShown">
        <input type="checkbox" id="controlsFilterMarked" class="controls_input"
               v-model="appliedFilters.marked"
               v-on:change="applyCurrentFilter" />
        <label for="controlsFilterMarked" class="controls_label">Marked</label>
        <input type="checkbox" id="controlsFilterFavorite" class="controls_input"
               v-model="appliedFilters.favorite"
               v-on:change="applyCurrentFilter" />
        <label for="controlsFilterFavorite" class="controls_label">Favorite</label>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'isAddNoteShown',
      'isListView',
      'isAllNotesMarked',
      'isFilterShown',
      'appliedFilters'
    ])
  },
  methods: {
    toggleAddNote () {
      this.$store.commit('toggleNewNote');
    },
    toggleView () {
      this.$store.commit('toggleListView');
    },
    toggleFilter () {
      this.$store.commit('toggleFilter');
    },
    applyCurrentFilter () {
      this.$store.commit('applyFilters');
    },
    clearNotesInStorage () {
      this.$store.commit('clearNotes');
      localStorage.removeItem('notes');
    },
    toggleMarkAllNotes () {
      this.$store.commit('toggleMarkAllNotes');
      this.$store.commit('saveNotesInStorage');
    }
  }
}
</script>
