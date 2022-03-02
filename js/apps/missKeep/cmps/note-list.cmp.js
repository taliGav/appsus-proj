// import bookPreview from "./book-preview.cmp.js";

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id" class="note-preview-container">
                    <!-- <book-preview :book="book"/> -->
                    <div class="actions">
                        <router-link :to="'/book/'+book.id">actions</router-link>
                    </div>
                </li>
            </ul>
        </section>
        `,
    components: {
    },
    data() {
        return {

        };
    },
    methods: {
    },
    computed: {}
};
