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
                        <button>delete</button>
                        <button>read/unread</button>
                        <button>details</button>
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
        emailPreview
    },
    created() {
    },
    methods: {
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