<template>
  <div class="controls">
    <button class="btn"
            v-bind:class="{ 'btn_active': isAddNoteShown }"
            v-on:click="toggleAddNote">Add</button>
    <button class="btn">Clear</button>
    <button class="btn">Mark</button>
    <button class="btn">Filter</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'isAddNoteShown'
    ])
  },
  methods: {
    toggleAddNote () {
      this.$store.commit('toggleNewNote')
    }
  }

}
</script>
