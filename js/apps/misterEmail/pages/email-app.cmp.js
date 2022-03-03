import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetails from "./email-details.cmp.js";
import emailCompose from "./email-compose.cmp.js";



export default {
    template: `
        <section class="email-app">
            <email-filter @filtered="setFiltered"/>
            <email-compose @send="sendMail"/>
            <email-list :emails="emails" @remove="deleteEmail" @selected="selectEmail"/>
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
        selectEmails(email) {
            this.selectedEmails = email;
        },
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
        emailsForDisplay
    },
    mounted() {
    },
    unmounted() {
    }
};