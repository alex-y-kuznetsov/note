<template>
  <div class="notes"
       v-bind:class="{ 'notes_list': isListView }">
    <h1 class="notes_title">Notes</h1>
    <div class="notes_inner">
      <NewNoteItem v-if="isAddNoteShown"
                   v-on:note-created="onNoteCreated" />
      <NoteItem v-for="(note, index) in notes"
                v-bind:key="index"
                v-bind:title="note.title"
                v-bind:text="note.text"
                v-bind:date="note.date" />
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
  methods: {
    onNoteCreated () {
      this.$store.commit('toggleNewNote');
      this.$store.commit('updateNotes');
    }
  },
  created () {
    this.$store.commit('updateNotes');
  }
}
</script>
