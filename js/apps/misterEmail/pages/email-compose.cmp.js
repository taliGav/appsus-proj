import { emailService } from "../service/email-service.service.js";

export default {
    template: `
        <section class="email-compose page-height">
            <router-link to="/email/inbox">Return</router-link>
            <form @submit.prevent="send">
        <h2>add mail</h2>
            <input type="text" v-model="emailToEdit.to" placeholder="To">
            <input type="text" v-model="emailToEdit.subject" placeholder="Subject">
            <textarea name="msgBody" id="msgBody" cols="60" rows="20" v-model="emailToEdit.body"></textarea>
            <button>Send</button>
        </form>
        </section>
        `,
    data() {
        return {
            emailToEdit: emailService.getEmptyEmail()
        };
    },
    methods: {
        send() {
            if (!this.emailToEdit.body || !this.emailToEdit.to) return;
            const mail = emailService.save(this.emailToEdit);
            console.log('mail is:', mail);
            this.$emit('send', mail);
            this.emailToEdit = emailService.getEmptyEmail();
        }
    },
};