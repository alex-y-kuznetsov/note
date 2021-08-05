<template>
  <article class="note">
    <div class="note_header">
      <h1 class="note_title" v-bind:title="title">{{ title }}</h1>
      <div class="note_status">
        <input type="checkbox"
               class="note_input"
               id="noteMark"
               v-model="currentNote.marked" />
        <label class="note_icon note_mark"
               for="noteMark"
               title="Mark"></label>
        <input type="checkbox"
               class="note_input"
               id="noteFav"
               v-model="currentNote.favorite" />
        <label class="note_icon note_fav"
               for="noteFav"
               title="Favorite"></label>
        <button class="note_icon note_delete"
                title="Delete"></button>
      </div>
    </div>
    <div class="note_text">{{ text }}</div>
    <span class="note_date">{{ date }}</span>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    id: Number,
    title: String,
    text: String,
    date: String,
    marked: Boolean,
    favorite: Boolean
  },
  computed: {
    ...mapState([
      'notes'
    ]),
    currentNote () {
      return this.notes.find(note => note.id === this.id)
    }
  }
}
</script>
