<template>
  <article class="note">
    <div class="note_header">
      <h1 class="note_title" v-bind:title="title">{{ title }}</h1>
      <div class="note_status">
        <span class="note_icon note_new" title="New"></span>
        <span class="note_icon note_fav" title="Favorite"></span>
      </div>
    </div>
    <div class="note_text">{{ text }}</div>
    <span class="note_date">{{ date }}</span>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    date: String
  }
}
</script>
