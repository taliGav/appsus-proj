import { noteService } from "../services/note.service.js";
import txtPreview from "./../cmps/note-txt.cmp.js";

// import noteList from "./../cmps/note-list.cmp.js";

export default {
    template: `
        <!-- <section class="keep-app app-main">
            <note-list v-if="notes" :notes="notes" />
        </section> -->

        <section v-if="notes" class="note-list app-main">
            <ul>
            <div v-for="(cmp, idx) in notes.cmps">
                    <component :is="cmp.type"  :info="cmp.info"></component>
                </div>
            </ul>
        </section>

    `,
    components: {
        txtPreview
        // noteList
    },
    data() {
        return {
            notes: null,
        };
    },
    created() {
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