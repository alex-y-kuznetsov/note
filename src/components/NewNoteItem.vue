<template>
  <article class="note new_note">
    <div class="note_header">
      <input class="note_title new_note_title"
             placeholder="Enter title of your note"
             v-model="newNote.title">
    </div>
    <textarea class="note_text new_note_text"
              placeholder="Enter text of your note"
              rows="4"
              v-model="newNote.text">
    </textarea>
    <div class="validation_message"
         v-if="!validation">
      Please fill all fields
    </div>
    <button class="btn"
            v-on:click.stop="eraseNote">
      Erase
    </button>
    <button class="btn"
            v-on:click.stop="createNote">
      Create
    </button>
  </article>
</template>

<script>
export default {
  data () {
    return {
      newNote: {
        id: null,
        title: '',
        text: '',
        date: '',
        marked: false,
        favorite: false
      },
      validation: true
    }
  },
  methods: {
    createNote () {
      const now = Date.now()
      this.newNote.date = new Date(now).toLocaleString();
      this.newNote.id = new Date().getTime();

      if (this.newNote.title && this.newNote.text) {
        this.$store.commit('createNewNote', this.newNote);
        this.$store.commit('saveNotesInStorage');
        this.$store.commit('toggleNewNote');
        this.validation = true;
      } else {
        this.validation = false;
      }
    },
    eraseNote () {
      this.newNote.title = '';
      this.newNote.text = '';
    }
  }
}
</script>
