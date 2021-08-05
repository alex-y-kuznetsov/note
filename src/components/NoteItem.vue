<template>
  <article class="note">
    <div class="note_header">
      <h1 class="note_title">{{ title }}</h1>
      <div class="note_status">
        <span class="note_icon note_new" title="New"></span>
        <span class="note_icon note_fav" title="Favorite"></span>
      </div>
    </div>
    <div class="note_text">{{ text }}</div>
    <span class="note_date">12.12.2021</span>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
}
</script>
