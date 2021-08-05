<template>
  <div class="controls">
    <button class="btn"
            v-bind:class="{ 'btn_active': isAddNoteShown }"
            v-on:click.stop="toggleAddNote">
      Add
    </button>
    <button class="btn"
            v-on:click.stop="saveNotesInStorage">
      Save
    </button>
    <button class="btn"
            v-on:click.stop="clearNotesInStorage">
      Clear
    </button>
    <button class="btn">Mark</button>
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
      'isListView'
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
    saveNotesInStorage () {
      this.$store.commit('saveNotesInStorage');
    }
  }

}
</script>
