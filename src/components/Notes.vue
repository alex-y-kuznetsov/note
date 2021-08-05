<template>
  <div class="notes"
       v-bind:class="{ 'notes_list': isListView }">
    <h1 class="notes_title">Notes</h1>
    <div class="notes_inner">
      <NewNoteItem v-if="isAddNoteShown"/>
      <NoteItem v-for="note in notes"
                v-bind:id="note.id"
                v-bind:key="note.id"
                v-bind:title="note.title"
                v-bind:text="note.text"
                v-bind:date="note.date"
                v-bind:marked="note.marked"
                v-bind:favorite="note.favorite" />
    <div class="notes_empty"
         v-if="!notes.length && !isAddNoteShown">
      No notes here. Try adding one.
    </div>
    </div>
    <Stats />
  </div>
</template>

<script>
import NewNoteItem from '@/components/NewNoteItem.vue';
import NoteItem from '@/components/NoteItem.vue';
import Stats from '@/components/Stats.vue';
import { mapState } from 'vuex';

export default {
  components: { NewNoteItem, NoteItem, Stats },
  computed: {
    ...mapState([
      'isAddNoteShown',
      'isListView',
      'notes'
    ])
  },
  created () {
    this.$store.commit('updateNotes');
  }
}
</script>
