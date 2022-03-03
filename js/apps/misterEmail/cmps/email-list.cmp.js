import emailPreview from "./email-preview.cmp.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <email-preview v-if="email" :email="email"/>
                    <div class="actions">
                        <input type="checkbox">
                        <button>⭐</button>
                        <button @click="deleteEmail(email.id)">🗑️</button>
                        <button @click="toggleRead(email)">👁️</button>
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
        },
        toggleRead(email) {
            console.log('this.email is:', email);
            email.isRead = !email.isRead;
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