import emailPreview from "./email-preview.cmp.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id" >
                    <router-link class="email-preview-link" :to="'/email/'+email.id" >
                        <email-preview v-if="email" :email="email"/>
                    </router-link>
                    <div class="actions">
                        <input type="checkbox">
                        <button @click.stop="toggle(email,'star')">⭐</button>
                        <button @click="deleteEmail(email.id)">🗑️</button>
                        <button @click="toggle(email,'read')">👁️</button>
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
        toggle(email, info) {
            this.$emit('toggleInfo', email, info);
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