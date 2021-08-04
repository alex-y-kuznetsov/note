<template>
  <div class="notes">
    <h1 class="notes_title">Notes</h1>
    <div class="notes_inner">
      <NewNoteItem />
      <NoteItem />
    </div>
  </div>
</template>

<script>
import NewNoteItem from '@/components/NewNoteItem.vue';
import NoteItem from '@/components/NoteItem.vue';
export default {
  components: { NewNoteItem, NoteItem }
}
</script>
