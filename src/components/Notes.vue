<template>
  <div class="notes">
    <span>Notes</span>
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
