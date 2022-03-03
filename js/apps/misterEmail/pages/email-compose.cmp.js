import { emailService } from "../service/email-service.service.js";

export default {
    template: `
        <section class="email-compose">
        <h2>add mail</h2>
        <!-- <pre>{{emailToEdit}}</pre> -->
        <form @submit.prevent="send">
            <input type="text" v-model="emailToEdit.to" placeholder="To">
            <input type="text" v-model="emailToEdit.subject" placeholder="Subject">
            <textarea name="msgBody" id="msgBody" cols="30" rows="10" v-model="emailToEdit.body"></textarea>
            <button>send</button>
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
            this.$emit('send', mail);
            this.emailToEdit = emailService.getEmptyEmail();
        }
    },
};