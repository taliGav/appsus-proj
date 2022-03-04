import { noteService } from "../services/note.service.js";
import { eventBus } from "./../../../service/eventBus-service.js";
import noteTxt from "./../cmps/note-txt.cmp.js";
import noteImg from "./../cmps/note-img.cmp.js";
import noteTodos from "./../cmps/note-todos.cmp.js";
import noteVideo from "./../cmps/note-video.cmp.js";
import userMsg from "./../../../cmps/reusable-cmps/user-msg.cmp.js";

// import noteList from "./../cmps/note-list.cmp.js";

export default {
    template: `
        <!-- <section class="keep-app app-main">
            <note-list v-if="notes" :notes="notes" />
        </section> -->

        <section v-if="notes" class="note-cmps page-height">
        <input v-if="newNote" type="text" v-model="newNote.info.title" placeholder="Note Title"></label>
        <input  v-if="newNote" type="text"  v-model="newNote.info.txt" placeholder="Note Text"></label>
        <button @click="saveNote" >Save</button>
        
        <input v-if="newNote" type="text" placeholder="newTxtPHolder">
        <button class="add-note" @click="addNote">Add note</button>

        <div class="notes-container flex">
            <div v-for="(note, idx) in notes">
                <component :is="note.type"  :info="note.info" :id="note.id"></component>
                <button @click="deleteNote(note.id)">X</button>
                <!-- <router-link :to="'/keep/edit/'+note.id">Edit</router-link> -->
                </div>
            </div>
            
        </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        userMsg
        // noteList
    },
    data() {
        return {
            notes: null,
            newNote: ''
            // newNote: noteService.getEmptyTxt()
        };
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes;
                console.log(notes);
                console.log(this.notes);
            });
    },
    methods: {
        addNote() {
            this.newNote = noteService.getEmptyTxt();
        },

        saveNote() {
            // console.log('saveNote func is on...');
            // console.log('note to save', this.newNote);

            noteService.save(this.newNote)
                .then(() => eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' }))
            // console.log('notes', this.notes);
            this.notes.push(this.newNote)
            // console.log('notes after push', this.notes);
            this.newNote = noteService.getEmptyTxt();
        },


        deleteNote(id) {
            console.log(id);
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id);
                    this.notes.splice(idx, 1);
                })
                .then(() => {
                    eventBus.emit('show-msg', { txt: 'note deleted', type: 'success' });
                })
                .catch(err => {
                    console.error(err);
                    eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
                });
        },
        computed: {
        }
    }
};



// <div class="new-note flex space-between">
//        <label for="title"><input type="text" v-model="newNote.info.title" placeholder="Note Title"></label>
//        <label for="note-text"><input type="text"  v-model="newNote.info.txt" placeholder="Note Text"></label>
//        <button @click="addNote" >Save</button>
//           </div>
