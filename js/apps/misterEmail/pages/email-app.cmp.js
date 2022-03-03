import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetails from "./email-details.cmp.js";
import emailCompose from "./email-compose.cmp.js";



export default {
    template: `
        <section class="email-app">
            <email-filter @filtered="setFilter"/>
            <email-compose @send="sendMail"/>
            <email-list :emails="emailsForDisplay" @remove="deleteEmail" @select="selectEmail"/>
            <email-details v-if="selectedEmail" :email="selectedEmail" @close="selectedEmail = null"/>
        </section>
        `,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: null
        };
    },
    components: {
        emailFilter,
        emailList,
        emailDetails,
        emailCompose,
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails);
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        deleteEmail(emailId) {
            console.log('try');
            emailService.remove(emailId)
                .then(() => {
                    const idx = this.emails.findIndex((email) => email.id === emailId);
                    this.emails.splice(idx, 1);
                });
        },
        selectEmail(email) {
            this.selectedEmail = email;
        },
        sendMail(email) {
            this.emails.push(email);
        }
    },
    computed: {
        emailsForDisplay() {
            console.log(' is:1');
            if (!this.filterBy) return this.emails;
            const regex = new RegExp(this.filterBy.textFilterd, 'i');
            return this.emails.filter(email => regex.test(email.body) || regex.test(email.subject));
        }
    },
};