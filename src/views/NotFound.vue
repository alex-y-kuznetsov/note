<template>
  <div class="not_found">
    <div class="not_found_inner">
      <div>This page probably never existed</div>
      <router-link class="btn not_found_back" v-bind:to="{ name: 'Home' }">Return to the one that did</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
