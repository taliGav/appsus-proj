import { noteService } from "../services/note.service.js";
import noteList from "./../cmps/note-list.cmp.js";

export default {
    template: `
        <section class="keep-app app-main">
            <note-list v-if="notes" :notes="notes" />
        </section>
    `,
    components: {
        noteList
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