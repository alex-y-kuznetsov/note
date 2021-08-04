<template>
  <div class="notes"
       v-bind:class="{ 'notes_list': isListView }">
    <h1 class="notes_title">Notes</h1>
    <div class="notes_inner">
      <NewNoteItem v-if="isAddNoteShown" />
      <NoteItem />
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
      'isListView'
    ])
  }
}
</script>
