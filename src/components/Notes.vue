<template>
  <div class="notes">
    <h1 class="notes_title">Notes</h1>
    <div class="notes_inner">
      <NoteItem />
    </div>
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue';
export default {
  components: { NoteItem }
}
</script>
