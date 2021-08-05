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
    <button class="btn">Filter</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'isAddNoteShown',
      'isListView',
      'isAllNotesMarked'
    ])
  },
  methods: {
    toggleAddNote () {
      this.$store.commit('toggleNewNote');
    },
    toggleView () {
      this.$store.commit('toggleListView');
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
