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
        title: '',
        text: '',
        date: ''
      }
    }
  },
  methods: {
    createNote () {
      const now = Date.now()
      this.newNote.date = new Date(now).toLocaleString();
      if (!localStorage.notes) {
        const notesForStorage = []
        notesForStorage.push(this.newNote)
        localStorage.setItem('notes', JSON.stringify(notesForStorage))
      } else {
        const notesFromStorage = JSON.parse(localStorage.notes);
        notesFromStorage.unshift(this.newNote);
        localStorage.notes = JSON.stringify(notesFromStorage);
      }
      this.$emit('note-created');
    },
    eraseNote () {
      this.newNote.title = '';
      this.newNote.text = '';
    }
  }
}
</script>
