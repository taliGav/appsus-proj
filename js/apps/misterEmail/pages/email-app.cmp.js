import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetails from "./email-details.cmp.js";



export default {
    template: `
        <section class="email-app">
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
        emailDetails
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
        }
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
};