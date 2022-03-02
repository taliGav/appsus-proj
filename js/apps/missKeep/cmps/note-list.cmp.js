import notePreview from "./note-preview.cmp.js";

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id" class="note-preview-container">
                    <note-preview v-if="note" :note="note"/>
                    <div class="actions">
                        <button>test1</button><button>test2</button>
                        <!-- <router-link :to="'/note/'+noteId">actions</router-link> -->
                    </div>
                </li>
            </ul>
        </section>
        `,
    components: {
        notePreview,
    },
    data() {
        return {
        };
    },
    created() {
            console.log(this.notes);
        ;
    },
    methods: {
    },
    computed: {}
};
