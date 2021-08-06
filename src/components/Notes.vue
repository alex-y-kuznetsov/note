<template>
  <div class="notes"
       v-bind:class="{ 'notes_list': isListView }">
    <h1 class="notes_title">
      <span>Notes</span>
      <span class="notes_filtered"
            v-if="isFiltered">
            <span>Applied filters: </span>
            <span class="notes_filter"
                  v-for="(appliedFilter, index) in appliedFilterTypes"
                  v-bind:key="index">{{ appliedFilter }}</span>
            </span>
    </h1>
    <div class="notes_inner">
      <NewNoteItem v-if="isAddNoteShown"/>
      <NoteItem v-for="note in notesArray"
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
      'appliedFilters',
      'notes',
      'filteredNotes'
    ]),
    isFiltered () {
      return this.appliedFilters.marked || this.appliedFilters.favorite;
    },
    notesArray () {
      return this.isFiltered ? this.filteredNotes : this.notes
    },
    appliedFilterTypes () {
      const trueItems = [];
      for (const item in this.appliedFilters) {
        if (this.appliedFilters[item] === true) {
          trueItems.push(item)
        }
      }
      return trueItems;
    }
  },
  created () {
    this.$store.commit('updateNotes');
  }
}
</script>
