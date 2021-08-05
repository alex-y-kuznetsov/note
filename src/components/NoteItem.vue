<template>
  <article class="note">
    <div class="note_header">
      <h1 class="note_title" v-bind:title="title">{{ title }}</h1>
      <div class="note_status">
        <input type="checkbox" class="note_input" id="noteMark" />
        <label class="note_icon note_mark" for="noteMark" title="Mark"></label>
        <input type="checkbox" class="note_input" id="noteFav" />
        <label class="note_icon note_fav" for="noteFav" title="Favorite"></label>
        <button class="note_icon note_delete" title="Delete"></button>
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
