import emailPreview from "./email-preview.cmp.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <email-preview :email="email"/>
                    <div class="actions">
                        <input type="checkbox">
                        <button>⭐</button>
                        <button @click="deleteEmail(email.id)">🗑️</button>
                        <button>read/unread</button>
                        <button @click="select(email)">details</button>
                    </div>
                </li>
            </ul>
        </section>
        `,
    data() {
        return {
            // selectedEmail
        };
    },
    components: {
        emailPreview,

    },
    created() {
    },
    methods: {
        deleteEmail(id) {
            this.$emit('remove', id);
        },
        select(email) {
            this.$emit('selected', email);
        }
    },
    computed: {

    },
    mounted() {
    },
    unmounted() {
    }
};




// id;
// subject;
// body;
// isRead;
// sentAt;
// to;
// from