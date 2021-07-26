<template>
  <div class="home">
    <Controls />
    <Notes />
  </div>
</template>

<script>
import Notes from '@/components/Notes.vue';
import Controls from '@/components/Controls.vue';

export default {
  name: 'Home',
  components: { Notes, Controls }
}
</script>
