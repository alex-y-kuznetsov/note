<template>
  <article class="note">
    <div class="note_header">
      <h1 class="note_title" v-bind:title="title">{{ title }}</h1>
      <div class="note_status">
        <input type="checkbox"
               class="note_input"
               v-bind:id="'noteMark_' + id"
               v-model="currentNote.marked"
               v-on:change="saveNotesInStorage" />
        <label class="note_icon note_mark"
               v-bind:for="'noteMark_' + id"
               title="Mark"></label>
        <input type="checkbox"
               class="note_input"
               v-bind:id="'noteFav_' + id"
               v-model="currentNote.favorite"
               v-on:change="saveNotesInStorage" />
        <label class="note_icon note_fav"
               v-bind:for="'noteFav_' + id"
               title="Favorite"></label>
        <button class="note_icon note_delete"
                title="Delete"
                v-on:click.stop="deleteNote(id)"></button>
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
  },
  methods: {
    saveNotesInStorage () {
      this.$store.commit('saveNotesInStorage');
    },
    deleteNote (id) {
      this.$store.commit('deleteNote', id);
      this.$store.commit('saveNotesInStorage');
    }
  }
}
</script>
