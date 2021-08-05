<template>
  <div class="stats">
    <span class="stats_item">Total: {{ stats.total }}</span>
    <span class="stats_item">Marked: {{ stats.marked }}</span>
    <span class="stats_item">Favorite: {{ stats.favorite }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'notes'
    ]),
    stats () {
      return {
        total: this.notes.length,
        marked: this.notes.filter(note => note.marked).length,
        favorite: this.notes.filter(note => note.favorite).length
      }
    }
  }
}
</script>
