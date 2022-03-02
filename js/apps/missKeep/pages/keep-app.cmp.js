import { noteService } from "../services/note.service.js";
import noteList from "./../cmps/note-list.cmp.js";

export default {
    template: `
        <section class="keep-app app-main">
            <book-list v-if="notes" />
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
            .then(notes => this.notes = notes);
    },
    methods: {
    },
    computed: {
    }
};