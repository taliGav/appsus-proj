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
                        <button>👁️</button>
                        <button @click="select(email)">details</button>
                    </div>
                </li>
            </ul>
        </section>
        `,
    components: {
        emailPreview,

    },
    methods: {
        deleteEmail(id) {
            this.$emit('remove', id);
        },
        select(email) {
            this.$emit('select', email);
        }
    },
};




// id;
// subject;
// body;
// isRead;
// sentAt;
// to;
// from