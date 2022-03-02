import { emailService } from "../service/email-service.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import emailDetails from "./email-details.cmp.js";



export default {
    template: `
        <section class="email-app">
            <email-list :emails="emails"/>
            <!-- <pre>{{emails}}</pre> -->
        </section>
        `,
    data() {
        return {
            emails: null,
            selectedEmails: null,
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
        }
    },
    computed: {
    },
    mounted() {
    },
    unmounted() {
    }
};