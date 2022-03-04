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

        <section v-if="notes" class="note-cmps app-main flex">
            <div v-for="(cmp, idx) in notes.cmps">
                <component :is="cmp.type"  :info="cmp.info"></component>
                <button @click="deleteNote(cmp.id)">X</button>
                <!-- <router-link :to="'/keep/edit/'+note.id">Edit</router-link> -->
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
        };
    },
    created() {
        console.log('hi');
        noteService.query()
            .then(notes => {
                this.notes = notes;
                console.log(notes);
                console.log(this.notes);
            });
    },
    methods: {
        deleteNote(id) {
            console.log(id);
            noteService.query()
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.cmps.findIndex((note) => note.id === id);
                    this.notes.cmps.splice(idx, 1);
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
}