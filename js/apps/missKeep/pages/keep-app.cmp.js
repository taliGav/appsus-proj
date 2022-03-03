import { noteService } from "../services/note.service.js";
import noteTxt from "./../cmps/note-txt.cmp.js";
import noteImg from "./../cmps/note-img.cmp.js";
import noteTodos from "./../cmps/note-todos.cmp.js";
import noteVideo from "./../cmps/note-video.cmp.js";

// import noteList from "./../cmps/note-list.cmp.js";

export default {
    template: `
        <!-- <section class="keep-app app-main">
            <note-list v-if="notes" :notes="notes" />
        </section> -->

        <section v-if="notes" class="note-cmps app-main flex">
            <div v-for="(cmp, idx) in notes.cmps">
                    <component :is="cmp.type"  :info="cmp.info"></component>
                </div>
          </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
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
                console.log(this.notes)});
    },
    methods: {
    },
    computed: {
    }
};